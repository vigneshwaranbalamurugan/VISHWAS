import React, { useEffect, useRef, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

const FaceDetection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const saveImage = (canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) => {
    const offScreenCanvas = document.createElement('canvas');
    const offScreenCtx = offScreenCanvas.getContext('2d');

    offScreenCanvas.width = width;
    offScreenCanvas.height = height;

    if (offScreenCtx) {
      offScreenCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);
      const dataURL = offScreenCanvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'captured_face.png';
      link.click();
    }
  };

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera:", err);
        setError("Could not access the camera. Please make sure it is not in use by another application and that you have granted the necessary permissions.");
      }
    };

    const detectFaces = async () => {
      try {
        const model = await blazeface.load();
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!video || !canvas || !ctx) {
          throw new Error("Video, Canvas, or Context not found");
        }

        video.addEventListener('play', () => {
          const runDetection = async () => {
            if (ctx && video && canvas) {
              const predictions = await model.estimateFaces(video, false);
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

              if (predictions.length > 0) {
                predictions.forEach((prediction) => {
                  const topLeft = prediction.topLeft as [number, number];
                  const bottomRight = prediction.bottomRight as [number, number];

                  const x = Math.round(topLeft[0]);
                  const y = Math.round(topLeft[1]);
                  const width = Math.round(bottomRight[0] - x);
                  const height = Math.round(bottomRight[1] - y);

                  ctx.beginPath();
                  ctx.rect(x, y, width, height);
                  ctx.strokeStyle = 'blue';
                  ctx.lineWidth = 2;
                  ctx.stroke();

                  saveImage(canvas, x, y, width, height);
                });
              }
              requestAnimationFrame(runDetection);
            }
          };
          runDetection();
        });
      } catch (err) {
        console.error("Error during face detection:", err);
        setError("An error occurred during face detection.");
      }
    };

    setupCamera();
    detectFaces();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <video ref={videoRef} autoPlay width="640" height="480" style={{ display: 'none' }} />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
};

export default FaceDetection;

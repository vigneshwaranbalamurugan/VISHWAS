import React, { useEffect, useRef } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

const FaceDetection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const saveImage = (canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) => {
    const passportWidth = 600;
    const passportHeight = 600;

    const faceCanvas = document.createElement('canvas');
    faceCanvas.width = passportWidth;
    faceCanvas.height = passportHeight;
    const faceCtx = faceCanvas.getContext('2d');

    if (faceCtx) {
      // Resize the detected face to passport photo dimensions
      faceCtx.drawImage(canvas, x, y, width, height, 0, 0, passportWidth, passportHeight);
      const dataURL = faceCanvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'captured_face.png';
      link.click();
    }
  };

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    const detectFaces = async () => {
      const model = await blazeface.load();
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');

      video?.addEventListener('play', () => {
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

                // Adjust bounding box to include more of the head and upper body if needed
                const extraPadding = 20; // Adjust padding as needed
                ctx.beginPath();
                ctx.rect(x - extraPadding, y - extraPadding, width + extraPadding * 2, height + extraPadding * 2);
                ctx.strokeStyle = 'blue';
                ctx.lineWidth = 2;
                ctx.stroke();

                saveImage(canvas, x - extraPadding, y - extraPadding, width + extraPadding * 2, height + extraPadding * 2);
              });
            }
            requestAnimationFrame(runDetection);
          }
        };
        runDetection();
      });
    };

    setupCamera();
    detectFaces();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
};

export default FaceDetection;

import React, { useEffect, useRef, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

const FaceRecognition: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [model, setModel] = useState<blazeface.BlazeFaceModel | null>(null);
  const [isFaceDetected, setIsFaceDetected] = useState<boolean>(false);

  const saveImage = (canvas: HTMLCanvasElement) => {
    const dataURL = canvas.toDataURL('image/png');
    setCapturedImage(dataURL); // Set captured image data URL to display
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx && video && canvas) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height); // Draw the entire video frame onto the canvas
      saveImage(canvas); // Save the entire canvas as an image
    } else {
      setError("Error accessing video or canvas.");
    }
  };

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await blazeface.load();
        setModel(loadedModel);
      } catch (err) {
        console.error("Error loading model:", err);
        setError("Failed to load face detection model.");
      }
    };

    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error("Error accessing the camera:", err);
        setError("Could not access the camera. Please make sure it is not in use by another application and that you have granted the necessary permissions.");
      }
    };

    const detectFaces = () => {
      const runDetection = async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (model && video && ctx && canvas) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const predictions = await model.estimateFaces(video, false);

          if (predictions.length > 0) {
            setIsFaceDetected(true); // Face detected
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
            });
          } else {
            setIsFaceDetected(false); // No face detected
          }
        }
        requestAnimationFrame(runDetection);
      };

      requestAnimationFrame(runDetection); // Start the loop for detection
    };

    loadModel().then(setupCamera).then(detectFaces); // Chain the calls to ensure order
  }, [model]);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <video ref={videoRef} autoPlay width="640" height="480" style={{ display: 'block' }} />
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
      <button onClick={captureImage} disabled={!isFaceDetected}>
        Capture
      </button>
      {capturedImage && (
        <div>
          <h2>Captured Image</h2>
          <img src={capturedImage} alt="Captured body" />
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;

import React, { useEffect, useRef, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

const FaceDetection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [model, setModel] = useState<blazeface.BlazeFaceModel | null>(null);

  const saveImage = (canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) => {
    const offScreenCanvas = document.createElement('canvas');
    const offScreenCtx = offScreenCanvas.getContext('2d');

    offScreenCanvas.width = width;
    offScreenCanvas.height = height;

    if (offScreenCtx) {
      offScreenCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);
      const dataURL = offScreenCanvas.toDataURL('image/png');
      setCapturedImage(dataURL); // Set captured image data URL to display
    }
  };

  const captureImage = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx && video && canvas && model) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height); // Draw the video frame onto the canvas
      const predictions = await model.estimateFaces(video, false); // Estimate faces in the video frame

      if (predictions.length > 0) {
        predictions.forEach((prediction) => {
          const topLeft = prediction.topLeft as [number, number];
          const bottomRight = prediction.bottomRight as [number, number];

          const x = Math.round(topLeft[0]);
          const y = Math.round(topLeft[1]);
          const width = Math.round(bottomRight[0] - x);
          const height = Math.round(bottomRight[1] - y);

          // Ensure the width and height are sufficient
          if (width > 50 && height > 50) {
            saveImage(canvas, x, y, width, height); // Save the face image
          } else {
            setError("Face too small to capture. Please ensure the face is clearly visible.");
          }
        });
      } else {
        setError("No faces detected.");
      }
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

    loadModel();
    setupCamera();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <video ref={videoRef} autoPlay width="640" height="480" style={{ display: 'block' }} />
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
      <button onClick={captureImage}>Capture</button>
      {capturedImage && (
        <div>
          <h2>Captured Face</h2>
          <img src={capturedImage} alt="Captured face" />
        </div>
      )}
    </div>
  );
};

export default FaceDetection;

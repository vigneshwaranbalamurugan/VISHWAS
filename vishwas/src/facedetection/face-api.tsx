import React, { useEffect, useRef, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';
import './Facedetection.css'

const FaceRecognition: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [model, setModel] = useState<blazeface.BlazeFaceModel | null>(null);
  const [isFaceDetected, setIsFaceDetected] = useState<boolean>(false);
  const [faceBox, setFaceBox] = useState<{ x: number, y: number, width: number, height: number } | null>(null);

  const saveImage = (canvas: HTMLCanvasElement) => {
    const dataURL = canvas.toDataURL('image/png');
    setCapturedImage(dataURL);
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx && video && canvas && faceBox) {
        // Adjust the padding to capture more of the head and upper body
        const extraPadding = 100; // Increase this value to capture more area
        const x = Math.max(faceBox.x - extraPadding, 0);
        const y = Math.max(faceBox.y - extraPadding, 0);
        const width = faceBox.width + extraPadding * 2;
        const height = faceBox.height + extraPadding * 2;

        canvas.width = width;
        canvas.height = height;

        const faceCanvas = document.createElement('canvas');
        faceCanvas.width = width;
        faceCanvas.height = height;
        const faceCtx = faceCanvas.getContext('2d');

        if (faceCtx) {
            faceCtx.drawImage(
                video,
                x,
                y,
                width,
                height,
                0,
                0,
                width,
                height
            );
            saveImage(faceCanvas);
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
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError("Failed to access camera.");
      }
    };

    const detectFace = async () => {
      if (model && videoRef.current) {
        const video = videoRef.current;
        const predictions = await model.estimateFaces(video, false);

        if (predictions.length > 0) {
          const { topLeft, bottomRight } = predictions[0];
          const [x1, y1] = topLeft as [number, number];
          const [x2, y2] = bottomRight as [number, number];

          setFaceBox({
            x: x1,
            y: y1,
            width: x2 - x1,
            height: y2 - y1,
          });
          setIsFaceDetected(true);
          setError(null);
        } else {
          setIsFaceDetected(false);
          setError("No face detected. Please try again.");
        }
      }
    };

    loadModel();
    setupCamera();

    const intervalId = setInterval(detectFace, 100);

    return () => clearInterval(intervalId);
  }, [model]);

  return (
    <div className="face-container">
      <div className="face-video-container">
        {error && <div className="face-error-message">{error}</div>}
        <video ref={videoRef} autoPlay muted />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        <div className="face-button-container">
          <button onClick={captureImage} disabled={!isFaceDetected}>
            Capture
          </button>
        </div>
      </div>
      <div className="face-image-container">
        <h2>Your Image</h2>
        {capturedImage && <img src={capturedImage} alt="Captured face" />}
      </div>
    </div>
  );
};

export default FaceRecognition;

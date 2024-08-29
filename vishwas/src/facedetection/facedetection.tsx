import React, { useEffect, useRef, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs';
import './facedetection.css';

const FaceRecognition: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [model, setModel] = useState<blazeface.BlazeFaceModel | null>(null);
    const [isFaceDetected, setIsFaceDetected] = useState<boolean>(false);
    const [faceBox, setFaceBox] = useState<{ x: number, y: number, width: number, height: number } | null>(null);
    const streamRef = useRef(null);

    const saveImage = (canvas: HTMLCanvasElement) => {
        const dataURL = canvas.toDataURL('image/png');
        setCapturedImage(dataURL);
    };


    const calculateSharpness = (faceCanvas: HTMLCanvasElement): number => {
        const faceCtx = faceCanvas.getContext('2d');
        const faceData = faceCtx?.getImageData(0, 0, faceCanvas.width, faceCanvas.height);
        if (!faceData) return 0;

        const imageTensor = tf.browser.fromPixels(faceData);
        const grayImage = tf.image.rgbToGrayscale(imageTensor);

        // Convert to float32 for TensorFlow.js compatibility
        const grayImageFloat = grayImage.toFloat();
        const laplacian = grayImageFloat.conv2d(
            tf.tensor2d([[0, -1, 0], [-1, 4, -1], [0, -1, 0]], [3, 3], 'float32'),
            1,
            'same'
        );

        const variance = laplacian.square().mean().arraySync();

        imageTensor.dispose();
        grayImage.dispose();
        grayImageFloat.dispose();
        laplacian.dispose();

        return variance;
    };
    const captureImage = async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!ctx || !video || !canvas || !model) {
            setError("Error accessing video or canvas.");
            return;
        }

        // Ensure the canvas has non-zero dimensions
        if (canvas.width === 0 || canvas.height === 0) {
            setError("Canvas size is invalid.");
            return;
        }

        const preCapturePredictions = await model.estimateFaces(video, false);
        if (!preCapturePredictions || preCapturePredictions.length === 0) {
            setError("No face detected. Please ensure your face is in view.");
            return;
        }

        const { topLeft, bottomRight } = preCapturePredictions[0];
        const [x1, y1] = topLeft as [number, number];
        const [x2, y2] = bottomRight as [number, number];
        const newFaceBox = {
            x: Math.max(0, x1),
            y: Math.max(0, y1),
            width: Math.max(1, x2 - x1),
            height: Math.max(1, y2 - y1),
        };

        const extraPadding = 100;
        const x = Math.max(newFaceBox.x - extraPadding, 0);
        const y = Math.max(newFaceBox.y - extraPadding, 0);
        const width = Math.min(video.videoWidth, newFaceBox.width + extraPadding * 2);
        const height = Math.min(video.videoHeight, newFaceBox.height + extraPadding * 2);

        // Update canvas dimensions
        canvas.width = width;
        canvas.height = height;

        if (width <= 0 || height <= 0) {
            setError("Invalid face bounding box dimensions.");
            return;
        }

        const faceCanvas = document.createElement('canvas');
        faceCanvas.width = width;
        faceCanvas.height = height;
        const faceCtx = faceCanvas.getContext('2d');

        if (faceCtx) {
            faceCtx.drawImage(video, x, y, width, height, 0, 0, width, height);

            // const sharpness = calculateSharpness(faceCanvas);
            // const sharpnessThreshold = 100; // Adjust this value based on testing

            // if (sharpness < sharpnessThreshold) {
            //     setCapturedImage(null);
            //     setError("Face is too blurry. Please adjust your position or lighting.");
            //     return;
            // }

            saveImage(faceCanvas);
        } else {
            setError("Error creating face canvas context.");
        }

        const postCapturePredictions = await model.estimateFaces(video, false);
        if (!postCapturePredictions || postCapturePredictions.length === 0) {
            setCapturedImage(null);
            setError("Face not detected after capture. Please try again.");
        } else {
            setError(null);
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
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                setError("Failed to access camera.");
            }
        };
    
        const stopCamera = () => {
            if (streamRef.current) {
                const tracks = streamRef.current.getTracks();
                tracks.forEach(track => track.stop());
                streamRef.current = null;
            }
            if (videoRef.current) {
                videoRef.current.srcObject = null;
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
                } else {
                    setIsFaceDetected(false);
                    setError("No face detected. Please try again.");
                }
            }
        };
    
        loadModel();
    
        if (showPopup) {
            setupCamera();
            const intervalId = setInterval(detectFace, 100);
            return () => {
                clearInterval(intervalId);
                stopCamera();
            };
        } else {
            stopCamera();
        }
    
        return () => {
            stopCamera();
        };
    }, [showPopup, model]);

    return (
        <div>
            <div className="face-container">
                <h2 className="profile-heading text-primary-marineBlue">Your Profile Picture</h2>
                <div className="face-image-container">
                    <div className="profile-pic-container">
                        {capturedImage ? (
                            <img src={capturedImage} alt="Captured face" className="profile-pic" />
                        ) : (
                            <div className="profile-pic-placeholder">Profile Pic</div>
                        )}
                    </div>
                </div>
                <div className="face-button-container">
                    <button onClick={() => setShowPopup(true)} className='bg-green-500 py-3 outline-none px-5 rounded-lg duration-700 text-white'>
                        Capture
                    </button>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <video ref={videoRef} autoPlay muted />
                        <canvas ref={canvasRef} style={{ display: 'none' }} />
                        <div className="popup-button-container">
                            <button onClick={captureImage} disabled={!isFaceDetected}>Capture Image</button>
                            <button onClick={() => setShowPopup(false)}>Done</button>
                            {capturedImage && <div className="captured-image-popup"><img src={capturedImage} alt="Captured face" className='profile-pic'/></div>
                        }
                        </div>
                        {error && <p style={{color:'red'}}>{error}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaceRecognition;

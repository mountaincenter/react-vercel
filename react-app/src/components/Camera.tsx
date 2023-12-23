import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const capture = () => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };
  return (
    <>
      {isCameraActive && (
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      )}
      <button onClick={capture}>Capture photo</button>
      <button onClick={toggleCamera}>{isCameraActive ? 'オフ' : 'オン'}</button>
    </>
  );
};

export default Camera;

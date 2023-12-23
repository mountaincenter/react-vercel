import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const videoConstraints = {
    facingMode: 'environment', // 背面カメラをデフォルトで使用
  };

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
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints} // ここに constraints を設定
        />
      )}
      <button onClick={capture} disabled={!isCameraActive}>
        Capture Photo
      </button>
      <button onClick={toggleCamera}>
        {isCameraActive ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>
    </>
  );
};

export default Camera;

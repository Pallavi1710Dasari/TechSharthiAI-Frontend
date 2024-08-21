import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { FaTimes } from 'react-icons/fa';
import { TbHandClick } from "react-icons/tb";
import { Box, Dialog, Typography } from '@mui/material';

const CameraCapture = ({ onCapture, onClose, isCameraCaptureOpen }) => {
  const webcamRef = useRef(null);

  const handleClose = () => {
    onClose();
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={isCameraCaptureOpen}>
      <Box sx={{height: "300px", width: "300px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <FaTimes onClick={handleClose} className="close-icon" style={{ cursor: 'pointer', marginBottom: '10px' }} />
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <TbHandClick onClick={capture} style={{ cursor: 'pointer', marginTop: '10px', fontSize: '24px' }} />
      <Typography sx={{fontSize: "12px", fontWeight: 800}}>Capture</Typography>
      </Box>
    </Dialog>
  );
};

export default CameraCapture;

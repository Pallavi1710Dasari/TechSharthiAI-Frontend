import React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

const Popup = ({ isPopupOpen, closePopup, handleCameraClick, popupButton }) => {

  const handleClose = () => {
    closePopup();
  };

  const open = Boolean(popupButton);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Popover
      id={id}
      open={isPopupOpen}
      anchorEl={popupButton}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Button onClick={() => document.getElementById('file-upload').click()}>
        Upload File
      </Button>
      <Button onClick={handleCameraClick}>
        Use Camera
      </Button>
      <Button onClick={closePopup}>
        Close
      </Button>
    </Popover>
  );
};

export default Popup;

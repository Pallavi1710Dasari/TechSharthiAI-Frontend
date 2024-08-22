import React, { useState } from 'react';

import { Box, TextField, IconButton, Paper, Grid } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

import { AiOutlinePlus } from "react-icons/ai";

import { FaRegImage } from "react-icons/fa6";

import { useSelector, useDispatch } from 'react-redux';

import {useNavigate, useLocation} from 'react-router-dom'

import { handleSendMessage, handleFileChange, handleCapture } from '../services/chatHandlers';

import { addNewChat, setUserInput } from '../store/store';

import CameraCapture from './CameraCapture';

import Popup from './Popup'

 

const InputContainer = ({ fileInputRef, ImageInputRef, pdfInputRef, pdfPage }) => {

 

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

 

  const { chats, currentChatIndex } = useSelector((state) => state.chat);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isCameraCaptureOpen, setIsCameraCaptureOpen] = useState(false);

  const [popupButton, setPopupButton] = useState(null)

 

 

  const userInput = chats[currentChatIndex]?.userInput || '';

 

  const onFileChange = (event) => {

    setIsPopupOpen(false)

    handleFileChange(event, dispatch, chats, currentChatIndex);

    if (location.pathname === "/" || location.pathname === "/chatwithdoc"){

      navigate("/chats")

    }

  }

 

  const OnImageChange = () =>{

    if (location.pathname === "/"){

      dispatch(addNewChat());

      ImageInputRef.current.click();

      navigate("/chats")

    }else{

      ImageInputRef.current.click();

    }

  }

 

  const onCapturePic = (imageSrc) => {

    setIsPopupOpen(false);

    handleCapture(imageSrc, dispatch, chats, currentChatIndex);

    if (location.pathname === "/") {

      navigate("/chats");

    }

  };

 

  const onSendMessage = () => {

    if (location.pathname === "/"){

      // dispatch(addNewChat())

      handleSendMessage(chats, currentChatIndex, dispatch)

      navigate("/chats")

    }else{

      handleSendMessage(chats, currentChatIndex, dispatch)

    }

  };

 

  const handleCameraClick = () => {

    closePopup();

    setIsCameraCaptureOpen(true);

  };

 

  const handleCloseCameraCapture = () => {

    setIsCameraCaptureOpen(false);

  };

 

  const openPopup = (event) => {

    setIsPopupOpen(true);

    setPopupButton(event.currentTarget)

  };

 

  const closePopup = () => {

    setIsPopupOpen(false);

  };

 

 

  const handleKeyPress = (event) => {

    if (event.key === 'Enter') {

      onSendMessage();

    }

  };

 

  return(

        <Paper elevation={6} sx={{

              display: pdfPage ? 'none' :'flex',

              alignItems: 'center',

              mb: 3,

              padding: 2,

              width: "80%",

              height: "5%",

              position: "sticky",

              top: "100%",

              // borderTop: '1px solid #E0E0E0'

              }}>

     <Grid container >

      <Grid item xs={12}>

          <input

            type="text"

            placeholder="Send a message, '@' for AI templates"

            style={{borderWidth: "0px", outline: "none", width: "100%", marginTop: "10px"}}

            value={userInput}

            onChange={(e) => dispatch(setUserInput({ chatIndex: currentChatIndex, userInput: e.target.value }))}

            onKeyPress={handleKeyPress}

          />

      </Grid>

       <Grid item xs={6} sx={{display: "flex"}}>

           <IconButton color="primary" aria-label="plus" onClick={openPopup} sx={{fontSize: "15px", margin: "5px 10px 5px 0px"}}>

              <AiOutlinePlus/>

           </IconButton>

           {isPopupOpen &&

           <Popup handleCameraClick={handleCameraClick} handleFileChange={handleFileChange} closePopup={closePopup} isPopupOpen={isPopupOpen} popupButton={popupButton}/>}

             <IconButton color="primary" aria-label="image" sx={{fontSize: "15px", margin: "5px 10px 5px 0px"}} onClick={OnImageChange}>    

                <FaRegImage/>

              </IconButton>

          <input

            type="file"

            id="image-upload"

            accept=".png,.jpg,.jpeg"

            onChange={onFileChange}

            ref={ImageInputRef}

            style={{ display: 'none' }}

          />    

          <input

            type="file"

            id="file-upload"

            accept=".png,.jpg,.jpeg,.pdf"

            onChange={onFileChange}

            ref={fileInputRef}

            style={{ display: 'none' }}

          />

          <input

            type="file"

            id="pdf-upload"

            accept=".pdf"

            onChange={onFileChange}

            ref={pdfInputRef}

            style={{ display: 'none' }}

          />

       </Grid>

      <Grid item xs={6}  sx={{textAlign: "right"}}>

        <IconButton color="primary" aria-label="send" onClick={onSendMessage}>

          <SendIcon/>

        </IconButton>

      </Grid>

    </Grid>

       <CameraCapture isCameraCaptureOpen={isCameraCaptureOpen} onCapture={onCapturePic} onClose={handleCloseCameraCapture} />        

  </Paper>

  )

};

 

export default InputContainer;





import React from 'react';
import { Box, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
import { LuFilePlus2 } from "react-icons/lu";
// import {useDispatch} from "react-redux"
// import {useNavigate} from "react-router-dom"
// import { useLocation } from 'react-router-dom';
import pdfImage from '../public/pdfImage.png'
// import { addNewChat } from '../store/store';
 
const UploadSection = ({pdfInputRef, ImageInputRef, pdfPage, fileInputRef}) => {
 
 
  const onUploadImageClick = () =>{
      ImageInputRef.current.click();
  }
 
  const onUploadPdfClick = () =>{
      pdfInputRef.current.click();
  }
 
  const onUploadFileClick = () =>{
    fileInputRef.current.click()
  }
 
 
 
  return(
  <Card sx={{ height: "180px", mb: 3, padding: 1.2, borderColor: '#E0E0E0', borderWidth: 1, borderStyle: 'solid' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Standard</Typography> */}
        {/* Dropdown Icon or any other controls */}
      </Box>
      <Box sx={{width: "100%", height: "80%", textAlign: 'center',border: '0.5px dashed #1565C0', borderRadius: 1, backgroundColor: "#E3F2FD"}}>
        <img src={pdfImage} alt="pdf" style={{width:"40px", height: "45px", marginTop: "5px" }} />
        <Typography variant="body2" sx={{ mt: 1, mb: 2, fontSize: "13px", fontWeight: 800 }}>Click to Upload or Drop PDF/DOC here</Typography>
        <Button variant="contained" size="small" color="primary"  onClick={pdfPage ? onUploadPdfClick : onUploadFileClick}> <LuFilePlus2 style={{marginRight: "5px"}}/>
        {pdfPage ? "Upload PDF" : "Upload Files"}
        </Button>
        {/* <Button variant="outlined" sx={{ml: "auto", alignSelf: "flex-end" }}><i className="material-icons"></i></Button> */}
      </Box>
      <Box  sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="caption" sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          // textDecoration: "underline",
                                            fontSize:"13px",
                                            color: 'transparent', // Make text transparent to show gradient
                                            background: 'linear-gradient(90deg, #FF5722, #2196F3)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                          
                                          }}>
          
          {pdfPage ? "* Upload .PDF only" : "* Upload .PDF .PNG  .jpg .jpeg only"}
        </Typography>
      </Box> 
  </Card>
)};
 
 
export default UploadSection;
import React, { useState } from 'react';
import { Box, Paper, Button, Typography, Grid } from '@mui/material';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
// import bgImage from '../public/bgImage.png'
 
function ContentArea({children}) {
 
  const location = useLocation()
 
  const [isSidebarOpen, setSidebarOpen] = useState(false)
 
  const onClickSidebar = () =>{
    setSidebarOpen(!isSidebarOpen)
  }
 
  const isChatPage = location.pathname === "/chats"
 
  return (
    <Grid container sx={{ backgroundColor: "#000000",
                          height: "100vh",
                          width: "100vw",
                          position: "fixed",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          overflowX: "hidden",
                          overflowY: "hidden",
                          }}>
        <Grid item xs={isSidebarOpen ? 0.5 : 2} sx={{display: "flex"}}>
          <Sidebar isSidebarOpen={isSidebarOpen} onClickSidebar={onClickSidebar}/>
        </Grid>
        <Grid item xs={isSidebarOpen ? 11 : 10}
                           sx={{
                            backgroundColor: "#ffffff",
                            height: "98vh",
                            width: "100%",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "7px 10px 8px auto",
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: "hidden",
                            // backgroundImage: isChatPage ? `url(${bgImage})` : "none",
                            // backgroundRepeat: "no-repeat",
                            // backgroundSize: "cover",
                            // backgroundPosition: "center",
                          }}>
                           
             {children}
        </Grid>
    </Grid>
  );
}
 
export default ContentArea;
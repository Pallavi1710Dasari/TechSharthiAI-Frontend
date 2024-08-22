import React from 'react';
import { Box, Typography } from '@mui/material';
import tectsharthilogo from '../public/techsharthilogo.png';

const Header = () => (
  <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
    <Box sx={{ margin: "20px 0px 25px 0px", display: "flex" }}>
        <img src={tectsharthilogo}
          alt="logo"
          style={{ height: "50px", width: "62px", marginTop: "10px" }}
        />
        <Typography sx={{ marginTop: "10px" }}>
          <span style={{
            fontSize: "40px",
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Math
          </span>
          <span style={{
            fontSize: "40px",
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #2a91ff, #4557f3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Sharthi
          </span>
        </Typography>
      </Box>
      <span style={{margin: "10px", fontSize:"30px"}}>|</span>
    <span className="description" style={{color: "#4557f3", fontSize: "15px", textAlign: "center"}}>Simplifying math, one equation at a time</span>
 </Box>  
);

export default Header;

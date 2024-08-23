import React from "react";
import { GoogleLogin } from "@react-oauth/google";
 
const GoogleSignInButton = ({ onSuccess }) => {
  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
      style={{ width: '100%', backgroundColor: '#a78bfa', color: 'white', marginBottom: '70px' }}
    />
  );
};
 
export default GoogleSignInButton;
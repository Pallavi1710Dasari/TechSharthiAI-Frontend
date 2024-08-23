import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import { css } from '@emotion/react';

// Define keyframes for bouncing animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

// Define keyframes for scrambling animation
const scramble = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define CSS for the animated text
const animatedTextStyle = css`
  display: inline-block;
  animation: ${bounce} 1s infinite;
  font-size: 2rem;
  margin: 0 2px;
`;

// Define CSS for scrambling effect
const scramblingStyle = css`
  display: inline-block;
  animation: ${scramble} 2s ease-in-out;
`;

const EqualizerText = () => {
  const [scrambledText, setScrambledText] = useState('Welcome to the Page!');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    //if (visible) {
      const scrambleInterval = setInterval(() => {
        setScrambledText(prevText =>
          prevText
            .split('')
            .map(char => (Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : char))
            .join('')
        );
      }, 50);

      setTimeout(() => {
        clearInterval(scrambleInterval);
        setScrambledText('Welcome to the Page!');
      }, 1000); // Duration for scrambling

      return () => clearInterval(scrambleInterval);
    //}
  }, [visible]);

  useEffect(() => {
    const handleUserInteraction = () => {
      setVisible(false);
    };

    // Add event listeners
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        transition: 'opacity 0.5s ease-in-out',
        opacity: visible ? 1 : 0,
        color:"orange",
      }}
    >
      {visible && (
        <Typography
          variant="h4"
          component="div"
          sx={{ marginBottom: 2, whiteSpace: 'pre' }}
        >
          {scrambledText.split('').map((char, index) => (
            <span
              key={index}
              css={animatedTextStyle}
              style={{ animation: scrambledText !== 'Welcome to the Page!' ? `${scramble} 2s ease-in-out` : 'none' }}
            >
              {char}
            </span>
          ))}
        </Typography>
      )}
    </Box>
  );
};

export default EqualizerText;

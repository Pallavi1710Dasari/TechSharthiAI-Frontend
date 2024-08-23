import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { SiProbot } from "react-icons/si";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography, Box, Grid } from '@mui/material';


const formatText = (text) => {
  // Split text by paragraphs (double newlines)
  const paragraphs = text.split('\n\n');
  
  // Initialize array to hold formatted elements
  const formattedParagraphs = paragraphs.map((paragraph, index) => {
    // Split paragraph by lines
    const lines = paragraph.split('\n');
    
    // Initialize array to hold formatted lines
    const formattedLines = lines.map((line, lineIndex) => {
      let formattedLine;

      // Check for semi-title (text wrapped in double stars)
      if (line.startsWith('**') && line.endsWith('**')) {
        formattedLine = (
          <Typography key={lineIndex} sx={{fontSize: "16px", fontWeight: 500, fontFamily: "Roboto"}}>
            {line.slice(2, -2)}
          </Typography>
        );
      }
      // Check for sub-title (text wrapped in single stars)
      else if (line.startsWith('*') && line.endsWith('*')) {
        formattedLine = (
          <Typography key={lineIndex} sx={{fontSize: "12px", fontWeight: 400, fontFamily: "Roboto"}}>
            {line.slice(1, -1)}
          </Typography>
        );
      }
      // Normal text
      else {
        formattedLine = (
          <Typography key={lineIndex} sx={{fontSize: "12px", fontWeight: 400, fontFamily: "Roboto"}}>
            {line}
          </Typography>
        );
      }

      return formattedLine;
    });

    return (
      <Box key={index} sx={{ mb: 4 }}>
        {formattedLines}
      </Box>
    );
  });

  return formattedParagraphs;
};


function AIWriter() {
  const [inputText, setInputText] = useState('');
  const [noWords, setNoWords] = useState('');
  const [blogStyle, setBlogStyle] = useState('Researchers');
  const [generatedText, setGeneratedText] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ai_writer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input_text: inputText, no_words: noWords, blog_style: blogStyle }),
      });

      const data = await response.json();
      if (response.ok) {
        setGeneratedText(data.generated_text); // HTML content
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <Grid container sx={{marginTop: "30px"}}>
      <Grid container item xs={12} sx={{ width: "100%", height: "40%", margin: "20px" }}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h6" gutterBottom
            sx={{ fontSize: "24px", fontWeight: 500, color: "#3c38ff", fontFamily: "Roboto", marginBottom: "20px" }}
          >
            <ReactTypingEffect
              text="Your Sharthi AI Writer"
              speed={50}
              eraseSpeed={50}
              typingDelay={500}
            />
            <SiProbot style={{color: "orange"}}/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Enter the Blog Topic"
            variant="outlined"
            fullWidth
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="No of Words"
            variant="outlined"
            value={noWords}
            onChange={(e) => setNoWords(e.target.value)}
            sx={{ mb: 2, width: "98%" }}
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <FormControl fullWidth sx={{ mb: 2, width: "98%" }}>
            <InputLabel>Blog Style</InputLabel>
            <Select
              value={blogStyle}
              onChange={(e) => setBlogStyle(e.target.value)}
            >
              <MenuItem value="Researchers">Researchers</MenuItem>
              <MenuItem value="Data Scientist">Data Scientist</MenuItem>
              <MenuItem value="Common People">Common People</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            // color="primary"
            onClick={handleSubmit}
            sx={{ mb: 2, backgroundColor: "#3c38ff" }}
          >
            Generate
          </Button>
        </Grid>
      </Grid>
       { generatedText && <Box sx={{ padding: "20px", margin: "auto" }}>
          <Typography variant="h6" sx={{color: "orange"}}>Generated Text:</Typography>
             {generatedText ? formatText(generatedText) :
           <Typography variant="body1">No text generated</Typography>}
        </Box>}
    </Grid>
  );
}

export default AIWriter;
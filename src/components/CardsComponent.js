import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

 
const CardsPage = () => {
    return (
       <Paper style={{margin: "5px", backgroundColor: "#e6f7ff", width: "98%"}}> 
        <Grid container spacing={1} style={{width: "100%", padding: "10px"}}>
            <Grid item xs={4} style={{padding: "5px", width: "95%", boxSizing: "border-box"}}>
                <Typography component="h6" style={{fontSize: "14px", fontWeight: 800}}>🧑🏻‍🏫 For Students</Typography>
                <p style={{fontSize: "12px", fontFamily: "Roboto", marginLeft: "10px"}}>Prepare for exams and homework. Generate custom presentation outline and speaker notes for your presentations.</p>
            </Grid>
            <Grid item xs={4} style={{padding: "5px", width: "95%", borderLeft: "1px solid #bfbfbf"}}>
                <Typography component="h6" style={{fontSize: "14px", fontWeight: 800}}>🎓 For Researchers</Typography>
                <p style={{fontSize: "12px", fontFamily: "Roboto", marginLeft: "10px"}}>Upload research papers and get information you need with just one click. Summarize paper abstract.</p>
            </Grid>
            <Grid item xs={4} style={{padding: "5px", width: "95%", borderLeft: "1px solid #bfbfbf"}}>
                <Typography component="h6" style={{fontSize: "14px", fontWeight: 800}}>💼 For Professionals</Typography>
                <p style={{fontSize: "12px", fontFamily: "Roboto", marginLeft: "10px"}}>Create an onboarding manual and training materials.Read contracts and financial reports 10X faster.</p>
            </Grid>
            <Grid xs={12}>
              <Divider  variant="middle" sx={{color: "#bfbfbf"}}/>
            </Grid>
            <Grid item xs={4} style={{padding: "5px", width: "95%"}}>
                <Typography component="h6" style={{fontSize: "14px", fontWeight: 800}}>🚀 Unlimited Upload</Typography>
                   <p style={{fontSize: "12px", fontFamily: "Roboto", marginLeft: "10px"}}>
                        No size limit.
                         <br/> No quantity limit.
                        <br/>No questions limit.
                  </p>
            </Grid>
            <Grid item xs={4} style={{padding: "5px", width: "95%", borderLeft: "1px solid #bfbfbf"}}>
                <Typography component="h6" style={{fontSize: "14px", fontWeight: 800}}>📜 Support Scanned Files</Typography>
                <p style={{fontSize: "12px", fontFamily: "Roboto", marginLeft: "10px"}}>As the only application that supports OCR, we can now help you automatically read scanned materials.</p>
            </Grid>
            <Grid item xs={4} style={{padding: "5px", width: "95%", borderLeft: "1px solid #bfbfbf"}}>
                <Typography component="h6" style={{fontSize: "14px", fontWeight: 800}}>📌 Cited Sources</Typography>
                <p style={{fontSize: "12px", fontFamily: "Roboto", marginLeft: "10px"}}>Answers base on PDF content with cited sources. No more scrolling to find the right page.</p>
            </Grid>
        </Grid>
        </Paper> 
    );
};
 
export default CardsPage;
import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate} from 'react-router-dom';

const AISection = () => {
  const navigate=useNavigate();
  return(
  <Box sx={{ mt: 2 }}>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 800, fontSize: "14px" }}>AI PRESENTATION</Typography>
        <Card sx={{ padding: 1, background: 'linear-gradient(to right, #E77855, #6AABD1)' , height: "100px"}}>
          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: "12px" }}>Create a presentation from topic or enhance your slides</Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained"  size="small" sx={{ mr: 2 }}>Enter topic</Button>
              {/* <Button variant="outlined" color="error"  size="small">Enhance file</Button> */}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 800, fontSize: "14px" }}>AI Writer</Typography>
        <Card sx={{ padding: 1, background: 'linear-gradient(to right, #E77855, #6AABD1)', height: "100px" }}>
          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: "12px" }}>AI-Powered Content Creator</Typography>
            <Button onClick={()=>{navigate('/aiwriter')}} variant="contained" size="small" sx={{ mt: 2 }}>Start Writing</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
)};

export default AISection;

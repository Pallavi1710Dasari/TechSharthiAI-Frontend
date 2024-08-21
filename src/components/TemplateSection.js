import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const TemplatesSection = () => (
  <Box sx={{ mt: 3 }}>
    <Typography variant="h6" sx={{ mb: 1, fontWeight: 800, fontSize: "16px" }}>Templates</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Typography variant="body2">Template 1</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more templates here */}
    </Grid>
  </Box>
);

export default TemplatesSection;

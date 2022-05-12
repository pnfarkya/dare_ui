import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImageStack from '../common/imageStack';
import { spacing, textAlign } from "@mui/system";
import Stack from '@mui/material/Stack';

const Recommendations = () => {

  /* TODO :: need to pass to imagestack with paths and then display accordingly.
             need to align control horizontally
             need to fetch data from api with images to display                 
  */
const data = [
    { creator : "Anubis", img1 : "/images/dare_logo.png"},
    { creator : "Girls in Pink", img1 : "/images/dare_logo.png"},
    { creator : "Cinema Apes", img1 : "/images/dare_logo.png"},
    { creator : "Lumberjack", img1 : "/images/dare_logo.png"},
  ];

return (
  <div >
    {data.map((item) => (
      <Stack direction="row">
        <Card sx={{width: '200px', height: '200px'}}>
          <CardHeader title={`${item.creator}`} style={{textAlign: 'center' }} />
          <CardContent >
            <Grid container justifyContent="center">
              <ImageStack />
            </Grid>
          </CardContent>
        </Card>
      </Stack>
    ))}
  </div>
  );
};

export default Recommendations; 
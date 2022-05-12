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
import ListItem from '@mui/material/ListItem';


const Recommendations = () => {

  /* TODO :: need to pass to imagestack with paths and then display accordingly.
             need to align control horizontally
             need to fetch data from api with images to display                 
  */
const data = [
    { 
      creator : "Anubis",
      imageData : [
        { url : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title:"Breakfast"},
        { url : "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title:"Burger"},
        { url : "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title:"Camera"},
        { url : "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title:"Coffee"}
      ]      
    },
    {
      creator : "Girls in Pink",
      imageData : [
        { url : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title:"Breakfast"},
        { url : "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title:"Burger"},
        { url : "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title:"Camera"},
        { url : "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title:"Coffee"}
      ]  
    },
    {
      creator : "Cinema Apes",
      imageData : [
        { url : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title:"Breakfast"},
        { url : "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title:"Burger"},
        { url : "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title:"Camera"},
        { url : "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title:"Coffee"}
      ]  
    },
    { 
      creator : "Lumberjack",
      imageData : [
        { url : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title:"Breakfast"},
        { url : "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title:"Burger"},
        { url : "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title:"Camera"},
        { url : "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title:"Coffee"}
      ]  
    }
  ];

  
return (
  <div >
    <Stack direction='row'>          
      {data.map((item) => (
        <Card sx={{width: '200px', height: '200px'}}>
          <CardHeader title={`${item.creator}`} style={{textAlign: 'center' }} />
          <CardContent >
            <Grid container justifyContent="center">
              <ImageStack imageData={item.imageData} />
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Stack>    
  </div>
  );
};

export default Recommendations; 
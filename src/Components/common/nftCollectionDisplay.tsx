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
import { border, fontFamily, spacing, textAlign } from "@mui/system";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

class NftCollectionDisplay extends React.Component<any, any> {

  constructor(props: any) {
      super(props);
      this.state = {
          isLoading: false,
          recommendations: [],
          title: null
      }
  }

  async componentDidMount() {
      this.setState({ isLoading: true })
      var recommendations = this.props.recommendations;
      var title = this.props.title;
      this.setState({ recommendations: recommendations, isLoading: false })      
  }
  
  render() {
      return(
        <div>
          <Box sx={{ border: 1, borderColor: '#4A148C'}}>
            <Box sx={{ backgroundColor: '#4A148C', color: 'whitesmoke', fontSize: 20, padding: 1 }}>              
                {this.props.title}              
            </Box>
            <div style={{height: '10px'}}></div>
            <Stack direction='row' spacing={1} sx={{ padding: 1 }}>          
              {this.props.recommendations.map((item) => (
                <Box sx={{ border: 1, borderColor: item.color }}>
                  <Card sx={{width: '200px', height: '200px'}}>
                    <CardHeader title={`${item.creator}`} style={{textAlign: 'center', backgroundColor: item.color }} />
                    <CardContent >
                      <Grid container justifyContent="center" >
                        <ImageStack imageData={item.imageData} />
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Stack>
          </Box>
        </div>
      )
  }
}

export default NftCollectionDisplay; 
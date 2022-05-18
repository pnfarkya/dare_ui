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
import { wrap } from "module";
import { Carousel } from '../customControls/carouselControl'

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
    return (
      <div>
        <Grid container item sx={{ padding: 1 }} >
          <Carousel show={5}>
            {this.props.recommendations.map((item) => (
              <Card style={{ width: 320, height: 350, marginLeft: 15 }}>
                <CardHeader title={`${item.creator}`} style={{ textAlign: 'center', backgroundColor: item.color }} />
                <CardContent >
                  <Grid container justifyContent='center' >
                    <ImageStack imageData={item.imageData} />
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </Grid>
      </div>
    )
  }
}

export default NftCollectionDisplay; 
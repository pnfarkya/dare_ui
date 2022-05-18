import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActionArea from '@mui/material/CardActionArea';
import ImageStack from '../common/imageStack';
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
              <Card style={{ width: 340, height: 250, marginLeft: 10 }}>
                <CardActionArea>
                  <CardHeader title={`${item.creator}`} style={{ textAlign: 'center', backgroundColor: item.color }} />
                  <CardContent >
                    <Grid container justifyContent='center' >
                      <ImageStack imageData={item.imageData} />
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Carousel>
        </Grid>
      </div>
    )
  }
}

export default NftCollectionDisplay; 
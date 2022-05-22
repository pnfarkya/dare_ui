import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActionArea from '@mui/material/CardActionArea';
import ImageStack from '../common/imageStack';
import { Carousel } from '../customControls/carouselControl';
import NftDetailDisplay from '../common/nftDetailDisplay';
import ButtonBase from '@mui/material/ButtonBase';

class NftCollectionDisplay extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      isDetailVisible: false,
      selectedCreator: null,
      selectedDetail: [],
      recommendations: [],
      title: null
    }
    this.showDetails = this.showDetails.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    var recommendations = this.props.recommendations;
    var title = this.props.title;
    this.setState({ recommendations: recommendations, isLoading: false })    
  }

  componentWillReceiveProps(props) {
    {
      this.refreshDetailVisible(false)
    }
  }

  swapDetailVisible = () => this.setState({isDetailVisible: !this.state.isDetailVisible})

  refreshDetailVisible = val => this.setState({isDetailVisible: val})

  refreshSelectedDetail = details => this.setState({selectedDetail: details})

  refreshSelectedCreator = creator => this.setState({selectedCreator: creator})

  showDetails(item, event) {  
    
    if(this.state.selectedCreator == item.creator) {
      this.swapDetailVisible();
    }     
    else {
      this.refreshDetailVisible(true);
    }
    this.refreshSelectedCreator(item.creator);
    this.refreshSelectedDetail(item);
    
  }

  render() {
    return (
      <div>
        <Grid container item sx={{ padding: 1 }} >
          <Carousel show={5}>
            {this.props.recommendations.map((item) => (
              <div style={{ width: 340, height: 300, marginLeft: 10 }} > 
                <Card onClick={(event) => this.showDetails(item, event)} >                  
                  <CardActionArea>
                    <CardHeader title={`${item.creator}`} style={{ textAlign: 'center', backgroundColor: item.color }} />
                    <CardContent >
                      <Grid container justifyContent='center' >
                        <ImageStack imageData={item.imageData} />
                      </Grid>
                    </CardContent>
                  </CardActionArea>                  
                </Card>
              </div>
            ))}
          </Carousel>
          <div style={{alignContent: 'center', margin: 10 }}>
            {this.state.isDetailVisible && <NftDetailDisplay selectedDetail={this.state.selectedDetail} /> }
          </div>          
        </Grid>
      </div>
    )
  }
}

export default NftCollectionDisplay; 
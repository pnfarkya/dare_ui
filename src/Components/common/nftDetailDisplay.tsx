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
import { border, fontFamily, spacing, textAlign, width } from "@mui/system";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { wrap } from "module";
import { Carousel } from '../customControls/carouselControl';
import { Public } from "@mui/icons-material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';

class NftCollectionDisplay extends React.Component<any, any> {

  constructor(props: any) {
      super(props);
      this.state = {
          isLoading: false,
          selectedDetail: []
      }
  }

  async componentDidMount() {
      this.setState({ isLoading: true })
      var selectedDetail = this.props.selectedDetail;
      this.setState({ selectedDetail: selectedDetail, isLoading: false })      
  }
  
  render()
    {   
      if(this.state.selectedDetail.details instanceof Object)
      {
        var creatorProfile=[];
        for(var i=0;i<this.state.selectedDetail.details.creatorProfileRating;i++){
             // push the component to elements!
             creatorProfile.push(<img width={25} height={25}
              src="/images/star.png"
              loading="lazy"
              />);
        }
        var codeQuality=[];
        for(var i=0;i<this.state.selectedDetail.details.codeQualityRating;i++){
             // push the component to elements!
             codeQuality.push(<img width={25} height={25}
              src="/images/star.png"
              loading="lazy"
              />);
        }
        var socialTraction=[];
        for(var i=0;i<this.state.selectedDetail.details.socialMediaRating;i++){
             // push the component to elements!
             socialTraction.push(<img width={25} height={25}
              src="/images/star.png"
              loading="lazy"
              />);
        }
      }

      return this.state.selectedDetail.details instanceof Object ? (
        <div style={{ width: '100%', height: 200, marginLeft: 10, alignItems: "center", textAlign: "center" }} > 
         <Carousel show={3} style={{margin: 10,textAlign: "center" }}>
          <Card style={{width: 350, height: 'auto', margin: 5 }}>                  
            <CardActionArea>
              <CardHeader title='Creator Profile' style={{ textAlign: 'center', fontSize: 5, height: 0.5, backgroundColor: this.state.selectedDetail.color }} />
              <CardContent >                
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }} >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Creator" />
                    xyakskgj
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rating" />
                    {creatorProfile}
                  </ListItem>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{width: 350, height: 'auto', margin: 5 }}>                   
            <CardActionArea>
              <CardHeader title='Code Quality' style={{ textAlign: 'center', fontSize: 5, height: 0.5, backgroundColor: this.state.selectedDetail.color }} />
              <CardContent >                
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }} >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Security" />
                    {codeQuality}               
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rating" />
                    {codeQuality}
                  </ListItem>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{width: 350, height: 'auto', margin: 5 }}>                   
            <CardActionArea>
              <CardHeader title='Social Media Traction' style={{ textAlign: 'center', fontSize: 5, height: 0.5, backgroundColor: this.state.selectedDetail.color }} />
              <CardContent >                
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }} >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Creator" />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rating" />
                    {socialTraction}
                  </ListItem>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>
          
         </Carousel>
        </div>
      ): "Fetching Data"
  }
}

export default NftCollectionDisplay; 
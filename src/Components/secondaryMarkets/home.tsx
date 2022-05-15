import {
    CircularProgress, getAccordionActionsUtilityClass, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
    Typography, Card, CardMedia, CardContent, CardHeader, Avatar, IconButton, Grid
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { getTopAseets } from '../repository/openSeaRepo'
import { Carousel } from '../customControls/carouselControl'
class SecondaryMarketsHome extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            assets: []
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true })
        var assets = await getTopAseets();
        this.setState({ assets: assets, isLoading: false })
    }

    render() {
        return (
            <div>
                <Typography fontWeight="bold" align='center' marginBottom={5} marginTop={3} color='darkblue'>Seconary Market</Typography>
                {this.state.isLoading ? (<>
                    <CircularProgress />

                </>) : (<>
                    <div style={{ width: '100%' }}>
                        <Carousel show={5}>
                            {/* <Grid container spacing={4}> */}
                            {
                                this.state.assets.map(row =>
                                (
                                    // <Grid item>
                                    <Card style={{ width: 350, height: 350, marginLeft: 15 }} elevation={10}>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe">
                                                    {row.creator.user !== null || row.creator.user !== undefined ? row.creator.user.username : ""}
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={row.name}

                                            subheader={new Date(row.asset_contract.created_date).toDateString()}
                                        />
                                        <CardMedia component='img' height='180' image={row.image_thumbnail_url} alt={row.name} />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {row.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    //</Grid>
                                )
                                )
                            }
                            {/* </Grid> */}
                        </Carousel>
                    </div>
                </>)
                }
            </div>)
    }
}
export default SecondaryMarketsHome;  

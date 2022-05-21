
import { getAllNft } from '../repository/nftRepo';
import { getTopAseets } from '../repository/openSeaRepo';
import { useEffect, useState } from 'react';
import React from 'react';
import { Typography, CircularProgress, Card, CardContent, CardMedia, CardHeader, Avatar, IconButton, Grid } from '@mui/material';
import { VerticalCarouselControl } from '../customControls/verticalCarouselControl';
import { width } from '@mui/system';
import { StayCurrentLandscapeSharp } from '@mui/icons-material';
import NftDetails from './nftDetails';

export default function CollectionDetailsView() {

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [collections, setCollections] = React.useState<any | any>([]);
    const [isLoading, setBusy] = React.useState<boolean | boolean>(false);
    const [currentSelected, setSelected] = React.useState<any | any>(null);

    useEffect(() => {
        setBusy(true);
        async function getCollection() {
            const data = await getAllNft();
            setCollections(data);
        }
        getCollection();
        setBusy(false);
    });


    const onNftDetails = (nft, event) => {
        setSelected(nft);
    }

    return (
        <div style={{ verticalAlign: 'center' }}>
            <Typography fontWeight="bold" align='center' marginBottom={5} marginTop={3} color='darkblue'>Collections</Typography>
            {isLoading ? (<>
                <p style={{ verticalAlign: 'center' }}>
                    <CircularProgress style={{ verticalAlign: 'center' }} />
                </p>
            </>) : (
                <Grid container>
                    <Grid item xs={12} sm={2}>
                        <Typography fontWeight="bold" align='center' color='darkblue'>NFTs</Typography>
                        <div style={{ verticalAlign: 'center', height: '680px', overflow: 'Auto', width: '245px' }}>
                            <VerticalCarouselControl show={3}>
                                {/* <Grid container spacing={4}> */}
                                {
                                    collections.map(row =>
                                    (
                                        <Card style={{
                                            width: 200, height: 200, marginTop: 10
                                        }} elevation={10}
                                            onClick={(event) => onNftDetails(row, event)}
                                        >
                                            <CardHeader
                                                avatar={
                                                    <Avatar aria-label="recipe">
                                                    </Avatar>
                                                }
                                                title={row.name}
                                            />
                                            <CardMedia component='img' height='120' width='100' image={row.image_thumbnail_url} alt={row.name} />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {row.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    )
                                    )
                                }
                                {/* </Grid> */}
                            </VerticalCarouselControl>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        {currentSelected != null && (<NftDetails nftItem={currentSelected} />)}
                    </Grid>
                </Grid>)
            }

        </div>
    )
}
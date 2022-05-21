import {
    CircularProgress, getAccordionActionsUtilityClass, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
    Typography, Card, CardMedia, CardContent, CardHeader, Avatar, IconButton, Grid, Accordion, AccordionDetails, AccordionSummary
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { getTopAseets } from '../repository/openSeaRepo'
import { Carousel } from '../customControls/carouselControl'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';

export default function SecondaryMarketsHome() {

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [assets, setAseets] = React.useState<any | any>([]);
    const [isLoading, setBusy] = React.useState<boolean | boolean>(false);

    useEffect(() => {
        setBusy(true);
        async function getAsset() {
            const data = await getTopAseets();
            setAseets(data);
        }
        getAsset();
        setBusy(false);
    });

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div style={{ verticalAlign: 'center' }}>
            <Typography fontWeight="bold" align='center' marginBottom={5} marginTop={3} color='darkblue'>Seconary Market</Typography>
            {isLoading ? (<>
                <p style={{ verticalAlign: 'center' }}>
                    <CircularProgress style={{ verticalAlign: 'center' }} />
                </p>
            </>) : (<>
                <div style={{ width: '100%' }}>
                    <Accordion expanded={expanded === 'top10'} onChange={handleChange('top10')} sx={{ marginTop: 1 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'whitesmoke' }} />} aria-controls="panel1a-content" id="panel1a-header"
                            sx={{ backgroundColor: '#4A148C', color: 'whitesmoke', fontSize: 20, padding: 1, height: 22 }}>
                            Top 10 Recommendations
                        </AccordionSummary>
                        <AccordionDetails>
                            <Carousel show={5}>
                                {/* <Grid container spacing={4}> */}
                                {
                                    assets.map(row =>
                                    (
                                        // <Grid item>
                                        <Card style={{ width: 350, height: 350, marginLeft: 15 }} elevation={10} onClick={(event) => { window.location.href = '/collections/collection' }}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar aria-label="recipe">
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
                        </AccordionDetails>
                    </Accordion>
                </div>
            </>)
            }
        </div>)
}

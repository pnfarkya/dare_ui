import { Grid, Typography, Box, Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

export default function NftDetails(props) {
    const { nftItem } = props;

    return (<>
        <Grid container id="main" rowSpacing={5}>
            <Grid container id="left" xs={12} sm={8} item rowSpacing={5}>
                <Grid item container id="header">
                    <Grid item xs={12} sm={1.5}>
                        <img src={nftItem.image_thumbnail_url} style={{ width: "100px", height: "100px" }} />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Typography fontWeight='bold' fontFamily='cursive' variant="body2" color="primary"> {nftItem.name} </Typography>
                        <Typography fontWeight='bold' fontFamily='cursive' variant="body2" color="info"> {nftItem.description}</Typography>
                    </Grid>
                </Grid>

                <Grid item id="financialdetails" container>
                    <Grid item container>
                        <Grid item xs={12} sm={3}>
                            <Typography fontWeight='bold' fontFamily='cursive'>{nftItem.currnetBid}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>

                            <Typography textAlign='center' fontWeight='bold' fontFamily='cursive'><MonetizationOnIcon color="info" />{`( ${nftItem.convertValue})`}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontWeight='bold'>{`24hr Volume: ${nftItem.volume}`}</Typography>
                            <Typography textAlign='center' fontWeight='bold'>{`24hr Sold Count: ${nftItem.count}`}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item id="graph" container>
                    <img width='500px' height='150px' src='https://www.statology.org/wp-content/uploads/2021/08/hist_shape1.png' />
                </Grid>
                <Grid item id="numbers" container>
                    <Grid item xs={12} sm={1.5}>
                        <Box sx={{ border: 1, alignContent: 'center', height: '90px', width: '100px', background: 'yellow' }}>
                            <Typography textAlign='center' fontWeight='bold' fontFamily='cursive' alignContent='center'>{`10K \n items`}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={1.5}>
                        <Box sx={{ border: 1, borderColor: 'yellow', alignContent: 'center', height: '90px', width: '100px', background: 'green' }}>
                            <Typography textAlign='center' fontWeight='bold' fontFamily='cursive' alignContent='center'>{`${nftItem.owners} \n owners`}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={1.5}>
                        <Box sx={{ border: 1, borderColor: 'green', alignContent: 'center', height: '90px', width: '100px', background: 'orange' }}>
                            <Typography textAlign='center' fontWeight='bold' fontFamily='cursive' alignContent='center'>{`${nftItem.floorPrice} \n floor price`}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={1.5}>
                        <Box sx={{ border: 1, borderColor: 'orange', alignContent: 'center', height: '90px', width: '100px', background: 'pink' }}>
                            <Typography textAlign='center' fontWeight='bold' fontFamily='cursive' style={{ alignSelf: 'center' }} alignContent='center'>{`${nftItem.tradedVolumes} \n\t traded volumes`}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid id="traits" container item>
                    {
                        nftItem.traits.map((t) =>
                        (<Grid item xs={12} sm={2}>
                            <Box sx={{ border: 1, borderColor: 'pink', alignContent: 'center', borderColor: 'blue', background: '#ADD8E6', height: '120px', width: '150px' }}>
                                <Typography alignContent='center' textAlign='center' fontFamily='cursive'>{t.name}</Typography>
                                <Typography alignContent='center' fontWeight='bold' textAlign='center' fontFamily='cursive'>{t.value}</Typography>
                            </Box>
                        </Grid>)
                        )
                    }
                </Grid>
                <Grid item id="social Media" container rowSpacing={5}>
                    <Grid item xs={12} sm={4}>
                        <TwitterIcon color="primary" /><a href={nftItem.webHandel}>{nftItem.twitterHandle}</a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <LanguageIcon color="secondary" /><a href={nftItem.webHandel}>{nftItem.webHandel}</a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item id="right" xs={12} sm={4}>
                <Grid item id="ratings" container rowSpacing={2}>
                    <Grid item id="ratings" container>
                        <Grid item xs={12} sm={1}>
                            <StarIcon color="primary" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography alignContent='center' fontSize='20' fontWeight='bold' fontFamily='cursive'>{`${nftItem.rating}`}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item id="ratings1" container>
                        <Grid item xs={12} sm={1}>
                            <FavoriteIcon color="error" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography alignContent='center' fontSize='20' fontWeight='bold' fontFamily='cursive'>{`${nftItem.wishlistCount}`}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item id="tradebuttons" container>
                    <Box sx={{ border: 1, borderColor: 'pink', alignContent: 'center', borderColor: 'green', height: '120px', width: '300px' }}>
                        <Typography fontSize='10' align="center" fontFamily='cursive'> Transaction</Typography>
                        <Grid item container marginLeft='50px' marginTop='10px'>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="success">
                                    Markets
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="info">
                                    P2P
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item container id="contactDetails">
                    <Grid item container>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='14' fontWeight='bold'>Contact Address :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='20'>{`${nftItem.address}`}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='14' fontWeight='bold'>Token Id :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' textOverflow='auto' fontSize='20'>{`${nftItem.tokenId}`}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='14' fontWeight='bold'>Token Standard :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='20'>{`${nftItem.standard}`}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='14' fontWeight='bold'>Blockchain :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='20'>{`${nftItem.blockchain}`}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='14' fontWeight='bold'>Metadata :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='20'>{`${nftItem.metadata}`}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='14' fontWeight='bold'>Creator Fees :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign='center' fontSize='20'>{`${nftItem.creatorFees}`}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>)
}
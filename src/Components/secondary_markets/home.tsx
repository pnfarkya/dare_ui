import { CircularProgress, getAccordionActionsUtilityClass, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import React from 'react';
import { getTopAseets } from '../repository/openSeaRepo'
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
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Id</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Image</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.assets.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right"><a href={`/asset/${row.id}`}>{row.id}</a></TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right"><img src={row.image_thumbnail_url} /></TableCell>
                                        <TableCell align="right">{row.description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>)
                }
            </div>)
    }
}
export default SecondaryMarketsHome;  

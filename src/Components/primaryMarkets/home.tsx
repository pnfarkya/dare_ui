import { Box } from '@mui/system';
import React from 'react';
import NftCollectionDisplay from '../common/nftCollectionDisplay';
import { getTop10Recommendations, getUpcomingRecommendations } from '../repository/primaryData'

class PrimaryMarketsHome extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            top10Recommendations: [],
            upcomingRecommendations: []
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true })
        var top10Recommendations = await getTop10Recommendations();
        var upcomingRecommendations = await getUpcomingRecommendations();
        this.setState({ top10Recommendations: top10Recommendations, isLoading: false })
        this.setState({ upcomingRecommendations: upcomingRecommendations, isLoading: false })
    }
    
    render() {
        return(
            <div>
                <br/>
                    <NftCollectionDisplay 
                        title="Top 10 Recommendations" 
                        recommendations={this.state.top10Recommendations}/>                
                <br/>
                    <NftCollectionDisplay 
                        title="Upcoming" 
                        recommendations={this.state.upcomingRecommendations}/>
            </div>
        )
    }
}

export default PrimaryMarketsHome; 
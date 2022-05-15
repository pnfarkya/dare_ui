import React, { useEffect } from "react";
import NftCollectionDisplay from '../common/nftCollectionDisplay';
import { getTop10Recommendations, getUpcomingRecommendations } from '../repository/primaryData'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { margin } from "@mui/system";

export default function PrimaryMarketsHome() {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [top10Recommendations, setTop10Recommendations] = React.useState<[] | []>([]);
    const [upcomingRecommendations, setUpcomingRecommendations] = React.useState<[] | []>([]);
    
    useEffect(() => {
        setTop10Recommendations(getTop10Recommendations());
        setUpcomingRecommendations(getUpcomingRecommendations());
       });
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  
    return (
      <div style={{marginTop: 5}}>
          
        <Accordion expanded={expanded === 'top10'} onChange={handleChange('top10')} sx={{ marginTop: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx ={{ color: 'whitesmoke'}} />} aria-controls="panel1a-content" id="panel1a-header" 
            sx={{ backgroundColor: '#4A148C', color: 'whitesmoke', fontSize: 20, padding: 1, height: 22 }}>
            Top 10 Recommendations
          </AccordionSummary>
          <AccordionDetails>
            <NftCollectionDisplay recommendations={top10Recommendations}/>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'upcoming'} onChange={handleChange('upcoming')} sx={{ marginTop: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx ={{ color: 'whitesmoke'}} />} aria-controls="panel2a-content" id="panel2a-header" 
            sx={{ backgroundColor: '#4A148C', color: 'whitesmoke', fontSize: 20, padding: 1, height: 22 }}>
            Upcoming             
          </AccordionSummary>
          <AccordionDetails>
            <NftCollectionDisplay recommendations={upcomingRecommendations}/>
          </AccordionDetails>
        </Accordion>
        
      </div>
    );
  }

// class PrimaryMarketsHome extends React.Component<any, any> {

//     constructor(props: any) {
//         super(props);
//         this.state = {
//             isLoading: false,
//             top10Recommendations: [],
//             upcomingRecommendations: []
//         }
//     }

//     async componentDidMount() {
//         this.setState({ isLoading: true })
//         var top10Recommendations = await getTop10Recommendations();
//         var upcomingRecommendations = await getUpcomingRecommendations();
//         this.setState({ top10Recommendations: top10Recommendations, isLoading: false })
//         this.setState({ upcomingRecommendations: upcomingRecommendations, isLoading: false })
//     }
    
//     render() {
//         return(
//             <div>
//                 <br/>
//                     <NftCollectionDisplay 
//                         title="Top 10 Recommendations" 
//                         recommendations={this.state.top10Recommendations}/>                
//                 <br/>
//                     <NftCollectionDisplay 
//                         title="Upcoming" 
//                         recommendations={this.state.upcomingRecommendations}/>
//             </div>
//         )
//     }
// }

// export default PrimaryMarketsHome; 
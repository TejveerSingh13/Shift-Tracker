import { SummaryContainer, Hours, Location } from "./style";

const Summary = () => {
    return ( 
        <SummaryContainer>
            <div>This week you worked</div>
            <Hours>14.5</Hours>
            <span>Hrs</span>
            <Location>At ID Station</Location>
        </SummaryContainer>
     );
}
 
export default Summary;
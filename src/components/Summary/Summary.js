import { SummaryContainer, Hours, Location } from "./style";

const Summary = () => {
    return ( 
        <SummaryContainer>
            <div>This week you worked</div>
            <Hours>35.5</Hours>
            <span>Hrs</span>
            <Location>At Little India</Location>
        </SummaryContainer>
     );
}
 
export default Summary;
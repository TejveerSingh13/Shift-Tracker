import OVItems from "./OVitems";
import { OVContainer } from "./style";

const OverView = () => {
    return(
        <OVContainer>
            <div>Your most recent Shifts</div>
            <OVItems day='Monday' date='26' month='January'/>   
        </OVContainer>
    )
}
export default OverView
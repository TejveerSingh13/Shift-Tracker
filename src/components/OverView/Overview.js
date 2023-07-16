import Modal from "../Modal";
import OVItems from "./OVitems";
import { OVContainer } from "./style";

const OverView = () => {
    return(
        <>
        <OVContainer>
            <div>Your most recent Shifts</div>
            <OVItems day='Monday' date='26' month='January'/>   
        </OVContainer>
        <Modal>
            <div>helow world1</div>
            <div>helow world2</div>
            <div>helow world3</div>
        </Modal>
        </>
    )
}
export default OverView
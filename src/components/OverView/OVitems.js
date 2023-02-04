import OVItemList from "./OVItemList";
import { OVIDate, OVItemsContainer } from "./style";

const OVItems = ({day, date, month}) => {
    return(
        <OVItemsContainer>
            <OVIDate>{day} , {date} {month}</OVIDate>
            <OVItemList place='ID Station' hr='10'/>
            <OVItemList place='Saffron Grill' hr='6'/>
        </OVItemsContainer>
    )
}

export default OVItems

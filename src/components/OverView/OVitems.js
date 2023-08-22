import { OVIDate, OVItemsContainer, OVItemListContainer } from "./style";

const OVItems = ({day, date, month, place, hr, odd}) => {
    return(
        <OVItemsContainer odd={odd}>
            <OVIDate>{day} , {date} {month}</OVIDate>
            <OVItemListContainer>
                <div>{place} </div>
                <div>{hr} Hours</div>
            </OVItemListContainer>
        </OVItemsContainer>
    )
}

export default OVItems

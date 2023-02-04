import { OVItemListContainer } from "./style"

const OVItemList = ({place, hr}) => {
    return(
        <OVItemListContainer>
            <div>{place} </div>
            <div>{hr} Hours</div>
        </OVItemListContainer>
    )
}

export default OVItemList
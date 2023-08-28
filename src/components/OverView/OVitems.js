import { useState } from "react";
import { OVIDate, OVItemsContainer, OVItemListContainer } from "./style";
import Modal from "../Modal";
import InputForm from "../InputForm/InputForm";

const OVItems = ({day, date, month, place, hr, odd, shift}) => {
    const [updateToggle, setUpdateToggle] = useState(false)

    const onClickHandler = () => {
        console.log("clicked", shift)
        setUpdateToggle((current) => !current)
    }
    const onToggleHandle = () => {
        setUpdateToggle((current) => !current)
    }
    const getFormData = (data) => {
        console.log('data from the new form ',data);
    }
    return(
        <>
        <OVItemsContainer odd={odd} onClick={onClickHandler}>
            <OVIDate>{day} , {date} {month}</OVIDate>
            <OVItemListContainer>
                <div>{place} </div>
                <div>{hr} Hours</div>
            </OVItemListContainer>
        </OVItemsContainer>
        {updateToggle && 
            <Modal onclick={onToggleHandle}>
                <InputForm sendData={getFormData} prevData={shift}/>
            </Modal>}
        </>
    )
}

export default OVItems

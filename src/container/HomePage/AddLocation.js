import { useState } from "react"
import { AddLocationButton, AddLocationButtonContainer, AddLocationContainer } from "./style"

const AddLocation = () => {
    const reset = {
        place: '',
        pay: ''
    }
    const [newPlaceData, setNewPlace] = useState(reset)
    const changeHandler = (e) => {
        setNewPlace({...newPlaceData, [e.target.name]: e.target.value})
    }
    const onSave = () => {
        if(!!newPlaceData.place && !!newPlaceData.pay) {
            console.log(newPlaceData)
            setNewPlace(reset)
        }
    }

    return(
        <AddLocationContainer>
            <div>Add a new work place</div>
            <div>Name</div>
            <input type="text" value={newPlaceData.place} name="place" onChange={changeHandler}/>
            <div style={{marginTop:'4px'}}>Rate '$'</div>
            <input type="number" value={newPlaceData?.pay} name="pay" onChange={changeHandler}/>
            <AddLocationButtonContainer>
                <AddLocationButton onClick={onSave}>Save!</AddLocationButton>
            </AddLocationButtonContainer>
        </AddLocationContainer>
    )
}
export default AddLocation
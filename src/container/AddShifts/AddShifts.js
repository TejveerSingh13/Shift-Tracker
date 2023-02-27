import { useState } from 'react';
import {
    ASContainer, 
    ASContainerTitile, 
    AddIcon, 
    FormContainer,
    InputCover,
    InputLabel,
    Input, 
    TimeInputCont,
    ButtonContainer,
    FormButton,
    Select} from './style';

const AddShifts = () => {

    const [taskFlag, setTaskFlag] = useState(false)
    const [shiftInfo, setShiftInfo] = useState({
        place:'',
        ti:'',
        to:'',
        date:'',
    })
    const places= [
        {
            name: "Saffron Grill",
            rate: "16"
        },
        {
            name: "ID Station",
            rate: "16"
        }
    ]

    const onAddClick = () => {
        setTaskFlag(current => !current)
        console.log(taskFlag);
    }
    const changeHandler = (e) => {
        console.log(e.target.value);
    }
    return ( 
        <>
            <ASContainer>
                <ASContainerTitile height={taskFlag}>
                    <span>Add/Edit a shift</span>
                    <AddIcon onClick={onAddClick}/>
                </ASContainerTitile>
                <FormContainer height={taskFlag}>
                    <InputCover error={false}>
                        <InputLabel>Select Workplace</InputLabel>
                        <Select value={shiftInfo.place} onChange={changeHandler}>
                            <option name =''> -- select an option -- </option>
                            {places.map((p)=>{
                                return <option name={p.name}>{p.name}</option>
                            })}
                        </Select>
                    </InputCover>
                    <TimeInputCont>
                        <InputCover error={false} right={true}>
                            <InputLabel>Time-In</InputLabel>
                            <Input type= 'time' value={shiftInfo.ti} onChange={changeHandler}/>
                        </InputCover>
                        <InputCover error={false}>
                            <InputLabel>Time-Out</InputLabel>
                            <Input type= 'time' value={shiftInfo.to} onChange={changeHandler}/>
                        </InputCover>
                    </TimeInputCont>
                    <InputCover error={false}>
                        <InputLabel>Date</InputLabel>
                        <Input type= 'date' value={shiftInfo.date} onChange={changeHandler}/>
                    </InputCover>
                    <ButtonContainer>
                        <FormButton>Save</FormButton>
                    </ButtonContainer>
                </FormContainer>
            </ASContainer>
        </>
     );
}
 
export default AddShifts;
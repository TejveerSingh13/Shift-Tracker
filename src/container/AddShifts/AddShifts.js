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
        // console.log(e.target.value)
        setShiftInfo({...shiftInfo, [e.target.name]: e.target.value})
    }
    const gethrs = () => {
        let hi = shiftInfo.ti.split(":")[0]
        let mini = shiftInfo.ti.split(":")[1]
        let ho = shiftInfo.to.split(":")[0]
        let mino = shiftInfo.to.split(":")[1]
        let hrs = ho -hi + (mino - mini)/60
        return hrs
    }
    const onSubmit = () => {
        const hr = gethrs()
        const details = {...shiftInfo, hrs: hr}
        console.log(details);
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
                        <Select value={shiftInfo.place} onChange={changeHandler} name='place'>
                            <option name =''> -- select an option -- </option>
                            {places.map((p)=>{
                                return <option name={p.name}>{p.name}</option>
                            })}
                        </Select>
                    </InputCover>
                    <TimeInputCont>
                        <InputCover error={false} right={true}>
                            <InputLabel>Time-In</InputLabel>
                            <Input type= 'time' value={shiftInfo.ti} onChange={changeHandler} name='ti'/>
                        </InputCover>
                        <InputCover error={false}>
                            <InputLabel>Time-Out</InputLabel>
                            <Input type= 'time' value={shiftInfo.to} onChange={changeHandler} name='to'/>
                        </InputCover>
                    </TimeInputCont>
                    <InputCover error={false}>
                        <InputLabel>Date</InputLabel>
                        <Input type= 'date' value={shiftInfo.date} onChange={changeHandler} name='date'/>
                    </InputCover>
                    <ButtonContainer>
                        <FormButton onClick={onSubmit}>Save</FormButton>
                    </ButtonContainer>
                </FormContainer>
            </ASContainer>
        </>
     );
}
 
export default AddShifts;
import { useState } from 'react';
import {
    ASContainer, 
    ASContainerTitile, 
    AddIcon, 
    FormContainer,
    InputCover,
    InputLabel,
    Input, 
    TimeInputCont} from './style';

const AddShifts = () => {
    const [taskFlag, setTaskFlag] = useState(false)
    const onAddClick = () => {
        setTaskFlag(current => !current)
        console.log(taskFlag);
    }
    return ( 
        <>
            <ASContainer>
                <ASContainerTitile height={taskFlag}>
                    <span>Add a shift</span>
                    <AddIcon onClick={onAddClick}/>
                </ASContainerTitile>
                <FormContainer height={taskFlag}>
                    <InputCover error={false}>
                        <InputLabel>Select Workplace</InputLabel>
                        <Input />
                    </InputCover>
                    <TimeInputCont>
                        <InputCover error={false} right={true}>
                            <InputLabel>Time-In</InputLabel>
                            <Input type= 'time'/>
                        </InputCover>
                        <InputCover error={false}>
                            <InputLabel>Time-Out</InputLabel>
                            <Input type= 'time'/>
                        </InputCover>
                    </TimeInputCont>
                    <InputCover error={false}>
                        <InputLabel>Date</InputLabel>
                        <Input type= 'date'/>
                    </InputCover>
                </FormContainer>
            </ASContainer>
        </>
     );
}
 
export default AddShifts;
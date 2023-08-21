import { useState } from 'react';
import InputForm from '../../components/InputForm/InputForm';

import {
    ASContainer, 
    ASContainerTitile, 
    AddIcon, 
    FormContainer} from './style';

// import { postUserData } from '../../redux/ActionCreator';

const AddShifts = ({places}) => {

    const [taskFlag, setTaskFlag] = useState(false)
    
    const onAddClick = () => {
        setTaskFlag(current => !current)
    }

    const getFormData = (data) => {
        console.log("It works!",data);
    }

    return ( 
        <>
            <ASContainer>
                <ASContainerTitile $height={taskFlag}>
                    <span>Add a shift</span>
                    <AddIcon onClick={onAddClick}/>
                </ASContainerTitile>
                <FormContainer height={taskFlag.toString()}>
                    <InputForm sentData= {getFormData}/>
                </FormContainer>
            </ASContainer>
        </>
     );
}
 
export default AddShifts;
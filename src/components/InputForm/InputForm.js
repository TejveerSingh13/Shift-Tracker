import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
    InputCover,
    InputLabel,
    Input, 
    TimeInputCont,
    ButtonContainer,
    FormButton,
    Select} from './style';

const InputForm = (props) => {

    const datadata = useSelector(state => state.user)
    const places = datadata.data.places

    const {sendData, prevData} = props

    console.log('seriously wtf', prevData);

    const [shiftInfo, setShiftInfo] = useState({
        place: prevData?.place || '',
        ti:prevData?.ti || '',
        to:prevData?.to || '',
        date:prevData?.date || '',
    })

    const changeHandler = (e) => {
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
        if(!prevData) setShiftInfo({
            place:'',
            ti:'',
            to:'',
            date:'',
        })
        sendData(details)
    }

    return(
        <>
            <InputCover error={false}>
                <InputLabel>Select Workplace</InputLabel>
                <Select value={shiftInfo.place} onChange={changeHandler} name='place'>
                    <option name =''> -- select an option -- </option>
                    {places ? places.map((p)=>{
                        return <option key={p.name} name={p.name}>{p.name}</option>
                    }) : <option>null</option>}
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
                {!prevData ? 
                <FormButton margin={true} width={true} onClick={onSubmit}>Save</FormButton> 
                :<div>
                    <FormButton margin={false} width={false} onClick={onSubmit}>Delete</FormButton>
                    <FormButton margin={false} width={false} onClick={onSubmit}>Update</FormButton>
                    <FormButton margin={false} width={false} onClick={onSubmit}>Cancel</FormButton>
                </div>}
            </ButtonContainer>
        </>
    )
}

export default InputForm
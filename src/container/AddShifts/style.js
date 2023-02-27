import styled from 'styled-components'
import { FaPlusCircle } from "react-icons/fa";

export const ASContainer = styled.div`
background-color: #C34A36;
padding: 12px;
margin-bottom: 16px;
color: white;
border-radius: 4px;
font-size: 24px;
max-width: 536px;
@media (min-width: 588px) {
  width: 536px;
}
`
export const ASContainerTitile = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: ${props=> props.height ? "12px": "0"};
`
export const AddIcon = styled(FaPlusCircle)`
color: white;
width: 24px;
height: 24px;
margin: auto 0 auto auto;
&:hover {
    cursor: pointer;
  }
`
export const FormContainer = styled.div`
height: ${props=> props.height ? '34vh' : '0vh'};
transition-property: height; 
transition-duration: 0.1s; 
overflow: hidden;
@media (min-width: 588px) {
  height: ${props=> props.height ? '33vh' : '0vh'};
}
`
export const InputCover = styled.div`
  border-bottom: 1px solid #B0A8B9;
  display:flex;
  flex-direction: column;
  width: 224px;
  margin-right: ${props => props.right ? '12px' : '0'};
  margin-bottom: 16px;
  border-bottom: ${props => props.error ? '3px solid #971c1c' : null};
  &:focus-within {
    border-bottom: 2px solid white;
  }
`
export const InputLabel = styled.span`
  color: white; 
  font-size: 20px;
  margin-bottom: 4px;
`
export const Input = styled.input`
  border: none;
  outline: none;
  margin: auto;
  width:100%;
  background-color: #C34A36;
  color: white;
`
export const Select = styled.select`
  border: none;
  outline: none;
  margin: auto;
  width:100%;
  background-color: #C34A36;
  color: white;
`
export const TimeInputCont = styled.div`
  display:flex;
  justify-content: space-between;
`
export const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
`
export const FormButton = styled.button`
  margin: 16px auto 0;
  height:32px;
  border: none;
  width:144px;
  border-radius:20px;
  color: white;
  outline: none;
  font-size: 16px;
  background-color:black;
  font-family: 'Pacifico', cursive;
  &:hover {
    cursor: pointer;
  }
`
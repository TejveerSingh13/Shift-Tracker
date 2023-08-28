import styled from 'styled-components'

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
  justify-content: space-evenly;
`
export const FormButton = styled.button`
  margin: ${props => props.margin ? '16px auto 0' : '8px 4px 0'};
  height:32px;
  border: none;
  width:${props => props.width ? '144px' : '92px'};
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
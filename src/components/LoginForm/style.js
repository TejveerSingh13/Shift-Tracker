import styled from 'styled-components'
import { FaJoomla } from "react-icons/fa";

export const InputCover = styled.div`
  border-bottom: 1px solid #B0A8B9;
  display:flex;
  flex-direction: column;
  width: 224px;
  margin-right: ${props => props.right ? '12px' : '0'};
  margin-bottom: 10px;
  border-bottom: ${props => props.error ? '3px solid #971c1c' : null};
  &:focus-within {
    border-bottom: 2px solid white;
  }
`
export const InputLabel = styled.span`
  color: white; 
  font-size: 16px;
  margin-bottom: 1px;
`
export const Input = styled.input`
  border: none;
  outline: none;
  margin: auto;
  width:100%;
  background-color: #C34A36;
  color: black;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(FaJoomla)`
color: white;
width: 54px;
height: 54px;
margin: 40px auto 12px;
&:hover {
    cursor: pointer;
  }
`

export const FormButton = styled.button`
  margin: 8px 4px;
  border: none;
  width: 100px;
  height: 28px;
  border-radius:20px;
  color: white;
  outline: none;
  font-size: 13px;
  background-color:black;
  font-family: 'Pacifico', cursive;
  &:hover {
    cursor: pointer;
  }
`
export const SU = styled.span`
  color: blue;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
` 
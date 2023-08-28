import styled from 'styled-components'
import { FaRegWindowClose } from "react-icons/fa";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const CrossIcon = styled(FaRegWindowClose)`
  color: white;
  width: 24px;
  height: 24px;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`

export const FormContainer = styled.div`
  margin: 100px auto;
  z-index:2;
  padding:8px 16px;
  border-radius:10px;
  border: 3px solid rgb(237 236 238);
  background-color: #c34a36;
  color: white;
  max-width:300px;
  @media (min-width: 558px) {
    max-width:400px;
    margin-top:80px;
  }
`
export const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width:100%;
height:100%;
z-index:1;
backdrop-filter: blur(5px);
`
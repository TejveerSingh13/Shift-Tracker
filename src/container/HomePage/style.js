import styled, { keyframes } from 'styled-components';
import { RiLoader2Fill } from "react-icons/ri";

export const HomePageContainer = styled.div`
display :flex;
flex-direction : column;
margin: 16px 12px;
@media (min-width: 588px) {
    align-items: center;
}
`
export const LoaderContainer = styled.div`
position: absolute;
width: 100%;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgba(176,168,185);
z-index: 100;
display: flex;
justify-content: center;
align-items: center;
`
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const LoaderIcon = styled(RiLoader2Fill)`
color: #C34A36;
width: 48px;
height: 48px;
margin: auto;
animation: ${spinAnimation} 1.5s infinite linear;
`
export const NavigationContainer = styled.div`
padding: 16px;
display: flex;
color: white;
border: white 2px solid;
justify-content: space-between;
background-color: #8b56c7;
`
export const NavigationButton = styled.div`
cursor: pointer;
margin-right: ${props => props.margin ? '8px' : '0'};
`
export const AddLocationContainer = styled.div`
margin-bottom: 8px
`
export const AddLocationButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
`
export const AddLocationButton = styled.button`
  margin-left: 18px; 
  height:32px;
  border: none;
  width: 92px;
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
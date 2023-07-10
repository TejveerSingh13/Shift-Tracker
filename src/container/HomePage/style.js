import styled, { keyframes } from 'styled-components';
import { RiLoader2Fill } from "react-icons/ri";

export const HomePageContainer = styled.div`
display :flex;
flex-direction : column;
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
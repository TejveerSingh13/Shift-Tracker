import styled from 'styled-components'

export const FormContainer = styled.div`
  margin: 100px auto;
  z-index:2;
  padding:8px 16px;
  border-radius:10px;
  background-color: #3b3a3a;
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
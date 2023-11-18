import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 100px auto;
  z-index:2;
  
  padding:8px 16px;
  border-radius:10px;
  overflow: hidden;
  position: relative;
  border: 3px solid rgb(237 236 238);
  background-color: #c34a36;
  color: white;
  max-width:300px;
  height: 300px;
  @media (min-width: 558px) {
    max-width:400px;
    margin-top:280px;
  }
`
export const BackgroundContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width:100%;
height:100%;
z-index:1;
backdrop-filter: blur(5px);
`

export const PagesContainer = styled.div`
  display: flex;
  position: absolute;
  transition: translate 0.3s ease-out;
`
export const PageContainer = styled.div`
  width: 400px;
  margin-right: 32px;
  @media (max-width: 558px) {
    width:300px;
  }
`
import {createGlobalStyle} from "styled-components"
import HomePage from "./container/HomePage/HomePage";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Pacifico', cursive;
  }
`

function App() {
  return (
    <div style={{margin:'16px 12px 16px 12px'}}>
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;

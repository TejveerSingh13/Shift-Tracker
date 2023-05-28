import {createGlobalStyle} from "styled-components"
import HomePage from "./container/HomePage/HomePage";
import {store} from "./store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Pacifico', cursive;
  }
`

function App() {
  return (
    <Provider store={store}>
      <div style={{margin:'16px 12px 16px 12px'}}>
        <GlobalStyle />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;

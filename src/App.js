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
      <div>
        <GlobalStyle />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;

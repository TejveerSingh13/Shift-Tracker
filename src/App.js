import {createGlobalStyle} from "styled-components"
// import HomePage from "./container/HomePage/HomePage";
import {store} from "./store";
import { Provider } from "react-redux";
import LoginPage from "./container/LoginPage";

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
        <LoginPage />
        {/* <HomePage /> */}
      </div>
    </Provider>
  );
}

export default App;

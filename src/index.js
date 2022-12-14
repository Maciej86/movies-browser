import React from "react";
import ReactDOM from "react-dom/client";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App/GlobalStyle";
import { theme } from "./App/theme";
import { App } from "./App/index";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./App/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

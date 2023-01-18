<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react"
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

>>>>>>> 1524af64b5ab5bd2cbe696482c522cefe6f054a1
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
<<<<<<< HEAD
 <ChakraProvider>
    <App />
  </ChakraProvider>
=======
  <Auth0Provider
    domain="dev-86w86544htfnmzxr.us.auth0.com"
    clientId="qiKmy9ahUNRinz8RUsGJ7P5fwnLcmzqO"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Auth0Provider>
>>>>>>> 1524af64b5ab5bd2cbe696482c522cefe6f054a1
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #333;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

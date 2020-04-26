import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, input::placeholder, textarea::placeholder {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  input::placeholder, textarea::placeholder {
    color: #a8a8b3;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }


`;

import { createGlobalStyle, css } from 'styled-components';

import githubBackground from '../assets/github-background.svg';
import githubBackgroundDark from '../assets/github-background-dark.svg';

import 'react-toggle/style.css';

const logo = {
  light: githubBackground,
  dark: githubBackgroundDark,
};

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
    background: ${({ theme }) =>
      `${theme.colors.background} url(${logo.light}) no-repeat 70% top`};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    ${({ theme }) =>
      theme.title === 'dark' &&
      css`
        background: ${theme.colors.background} url(${logo.dark}) no-repeat 70%
          top;
      `}
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

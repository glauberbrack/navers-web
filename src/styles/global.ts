import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(-color-background);
  }

  body {
    background: #FFFFFF;
    color: #212121;
    -webkit-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong, p {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    margin: 0;
  }

  p, span {
    margin: 0;
  }

  button {
    background: #212121;
    cursor: pointer;
  }

  input, button {
    border: 0;
  }

  :root {
    --color-background: #FFFFFF;
    --color-button: #212121;
    --color-input: #FFFFFF;
    --color-input-border: #424242;
    --color-text: #212121;
    --color-placeholder: #9e9e9e;
    --color-error: #c53030;
  }

`;

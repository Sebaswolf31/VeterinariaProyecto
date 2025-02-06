import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #f8f9fa;
    color: #333;
  
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  
  button {
    cursor: pointer;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 16px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    opacity: 0.9;
  }
`;



export default GlobalStyles;
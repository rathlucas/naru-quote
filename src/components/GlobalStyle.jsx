import { createGlobalStyle } from 'styled-components';
import bgImage from '../images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImage}) center no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
`;

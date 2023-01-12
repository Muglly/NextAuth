import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root{
    /*Primary*/
    --Blue : hsl(246, 80%, 60%);
    --Light-orange : hsl(15, 100%, 70%);
    --Soft-blue : hsl(195, 74%, 62%);
    --Light-red : hsl(348, 100%, 68%);
    --Lime-green : hsl(145, 58%, 55%);
    --Violet : hsl(264, 64%, 52%);
    --Soft-orange : hsl(43, 84%, 65%);

    /*Neutral*/
    --Very-dark-blue : hsl(226, 43%, 10%);
    --Dark-blue : hsl(235, 46%, 20%);
    --Desaturated-blue : hsl(235, 45%, 61%);
    --Pale-Blue : hsl(236, 100%, 87%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
    background-color: #0d1323;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

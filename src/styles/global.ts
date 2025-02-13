import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: "Arimo", serif;
      font-optical-sizing: auto;
      font-style: normal;
    }

    a, button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-height: 100%;
      max-width: 100%;
    }

    input {
      outline: 0;
    }
`

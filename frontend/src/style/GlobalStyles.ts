import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        font-size: 16px;
    }

    body {
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        color: ${({ theme }: { theme: any }) => theme.textColor};
        display: block;
        width: 100%;
        height: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    button {
        border: none;
        outline: none;
        color: ${({ theme }: { theme: any }) => theme.bgColor};
        background-color: ${({ theme }: { theme: any }) => theme.textColor};
    }
`

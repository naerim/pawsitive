import { createGlobalStyle, DefaultTheme } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        font-family: 'SCDream', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        font-family: 'SCDream', sans-serif;
        font-size: 15px;
    }

    #root {
        background: ${({ theme }: { theme: DefaultTheme }) => theme.bgColor};
        color: ${({ theme }: { theme: DefaultTheme }) => theme.textColor};
        display: block;
        width: 100%;
        height: 100%;
        font-family: 'SCDream', sans-serif;
    }

    button {
        border: none;
        outline: none;
        color: ${({ theme }: { theme: DefaultTheme }) => theme.textColor};
    }
`

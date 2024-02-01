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
        overflow-y: scroll;
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
        &::-webkit-scrollbar {
            display: none; /* 크롬, 사파리, 오페라, 엣지 */
            width: 0;  /* Remove scrollbar space */
            height: 0;
            background: transparent;  /* Optional: just make scrollbar invisible */
            -webkit-appearance: none;
        }
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
        font-size: 0.9em;
    }
`

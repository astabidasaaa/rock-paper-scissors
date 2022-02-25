import { createGlobalStyle } from "styled-components";
import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";

const GlobalStyles = createGlobalStyle`
    :root {
        --darkText: hsl(229, 25%, 31%);
        --scoreText: hsl(229, 64%, 46%);
        --headerOutline: hsl(217, 16%, 45%);
        --mainFont: "Barlow Semi Condensed", sans-serif;
    }

    html {
        height: 100vh;
    }

    body {
        height: 100%;
        background: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    }

    body > :first-child {
        width: 100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #gatsby-focus-wrapper {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        height:100%;
        justify-content: center;
        align-items: center;
    }

    .main-body {
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow-wrap: break-word;
        overflow-x: hidden;
        padding: 3rem;

        @media (max-width: 768px) {
            padding: 2rem;
        }

        @media (max-width: 425px) {
            padding: 1rem;
        }
    }
`;

export default GlobalStyles;

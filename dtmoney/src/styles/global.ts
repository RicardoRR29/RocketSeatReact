import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --backgound: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --shape: #FFFFFF;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font-size: 16px (desktop)
// 1rem = 16px

html {
    @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--backgound);
        -webkit-font-smoothing: antialiased; //buscar entender melhor
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
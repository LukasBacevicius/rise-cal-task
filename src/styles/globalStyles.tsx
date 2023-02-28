import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-gray-100: 22, 22, 22;
        --color-gray-90: 38, 38, 38;
        --color-gray-80: 57, 57, 57; 
        --color-gray-0: 255, 255, 255;

        --color-green-80: 4, 67, 23;
        --color-purple-60: 138, 63, 252;

        --default-shadow: 0px 16px 70px rgba(0, 0, 0, 0.5);
    }

    html * {
        font-family: Inter, sans-serif;
        font-size: 16px;
    }
    
    body {
        background-color: rgb(var(--color-gray-100));
    }
`;

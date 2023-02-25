import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-gray-100: #161616;
        --color-gray-90: #262626;
        --color-gray-80: #393939; 
        --color-gray-0: #FFFFFF;
        
        --color-green-80: #044317;
        --color-purple-60: #8A3FFC;
    }

    html,
    body {
        background-color: var(--color-gray-100);
        font-famly: Inter, sans-serif;
    }
`;

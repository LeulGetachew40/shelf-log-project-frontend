import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --color-theme-lime-400: oklch(84.1% 0.238 128.85);
        --color-border-grey-300 : oklch(87.2% 0.01 258.338);
        --color-filter-button-grey-500 : oklch(55.1% 0.027 264.364);
        --color-filter-button-grey-300 :oklch(87.2% 0.01 258.338);
        --color-readStatus-toRead-blue-400 : oklch(70.7% 0.165 254.624);
        --color-readStatus-reading-green-400 : oklch(79.2% 0.209 151.711);
        --color-readStatus-completed-yellow-400 : oklch(85.2% 0.199 91.936);
        --color-category-background-grey-300 : oklch(87.2% 0.01 258.338);
        --color-bookcard-background-grey-100 : oklch(96.7% 0.003 264.542);
        --color-bookcard-background-grey-50 : oklch(98.5% 0.002 247.839);
        --color-notes-background-zinc-100: oklch(96.7% 0.001 286.375);
    }

    *{
        margin: 0;
        box-sizing: border-box
    }

    body{
        font-family: 'Roboto Mono', sans-serif;
    }
`;

export default GlobalStyles;

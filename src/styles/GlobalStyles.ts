import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
       /* Color system */
        --color-primary-50: #e6f7f5;
        --color-primary-100: #ccefe9;
        --color-primary-200: #99dfd3;
        --color-primary-300: #66cfbd;
        --color-primary-400: #33bfa7;
        --color-primary-500: #00af91;
        --color-primary-600: #008c74;
        --color-primary-700: #006957;
        --color-primary-800: #00463a;
        --color-primary-900: #00231d;
        
        --color-accent-50: #fff4e6;
        --color-accent-100: #ffe9cc;
        --color-accent-200: #ffd399;
        --color-accent-300: #ffbd66;
        --color-accent-400: #ffa733;
        --color-accent-500: #ff9100;
        --color-accent-600: #cc7400;
        --color-accent-700: #995700;
        --color-accent-800: #663a00;
        --color-accent-900: #331d00;
        
        --color-neutral-50: #f8f9fa;
        --color-neutral-100: #f1f3f5;
        --color-neutral-200: #e9ecef;
        --color-neutral-300: #dee2e6;
        --color-neutral-400: #ced4da;
        --color-neutral-500: #adb5bd;
        --color-neutral-600: #868e96;
        --color-neutral-700: #495057;
        --color-neutral-800: #343a40;
        --color-neutral-900: #212529;
        
        --color-success-500: #37b24d;
        --color-warning-500: #f59f00;
        --color-error-500: #f03e3e;
        
        --color-reading-status-to-read: #4dabf7;
        --color-reading-status-reading: #40c057;
        --color-reading-status-completed: #fcc419;
        
        /* Spacing system */
        --space-1: 0.25rem; /* 4px */
        --space-2: 0.5rem;  /* 8px */
        --space-3: 0.75rem; /* 12px */
        --space-4: 1rem;    /* 16px */
        --space-5: 1.25rem; /* 20px */
        --space-6: 1.5rem;  /* 24px */
        --space-8: 2rem;    /* 32px */
        --space-10: 2.5rem; /* 40px */
        --space-12: 3rem;   /* 48px */
        
        /* Shadows */
        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
        --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
        --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
        
        /* Border radius */
        --radius-sm: 0.25rem;
        --radius-md: 0.375rem;
        --radius-lg: 0.5rem;
        
        /* Transitions */
        --transition-fast: 150ms ease;
        --transition-normal: 250ms ease;
        --transition-slow: 350ms ease;
    }

    *{
        margin: 0;
        box-sizing: border-box
    }

    html{
        font-size: 16px;
    }

    body{
        font-family: 'Roboto Mono', sans-serif;
        color: var(--color-neutral-900);
        background-color: var(--color-neutral-50);
        line-height: 1.5;
    }
`;

export default GlobalStyles;

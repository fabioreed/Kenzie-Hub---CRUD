import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Inter', sans-serif;

        list-style: none;
        text-decoration: none;
    }

    body {
        /* background-color: #121214; */
        background-color: #00020f;
        background-image: linear-gradient(171deg, #00020f 14%, #02235a 69%, #6d18b0 100%);
        height: 145vh;
    }

    button {
        cursor: pointer;
        border: none;
        transition: .4s ease;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --success: #3FE864;
        --negative: #E83F5B;
    }
`
export default GlobalStyle
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    
    box-sizing: border-box;
    margin: 0
    
}

:root {
    --color-primary: #F6683D;
    --border-shadow-default: 0 2px 8px rgba(0, 0, 0, 0.26);
    --border-radius: 5px;
}



body{
    
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    
}

a {
    text-decoration: none;
    color: white
}

main {
    margin-top: 5rem;
}

ul {
    list-style: none;
}

li {
    margin-bottom: 0.25rem;
}

h2 {
    margin: 2rem;
}

span {
    margin-right: 5rem;
    
}

input {
    color: inherit;
    background: transparent;
}

textarea {
    color: inherit;
    background: transparent
}

`;

export default GlobalStyle;

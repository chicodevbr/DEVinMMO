import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    
    box-sizing: border-box;
}

:root {
    --color-primary: #F6683D;
    --border-shadow-default: 0 2px 8px rgba(0, 0, 0, 0.26);
    --border-radius: 5px;
}

body{
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    margin: 0
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
`;

export default GlobalStyle;

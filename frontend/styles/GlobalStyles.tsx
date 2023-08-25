import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --padding-large: 40px;
  --global-padding: var(--padding-large);
}

  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size:16px;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: var(--white);
    color: var(--black);
  }
  menu{
    margin:0;
    padding:0;
  }

  a {
    color: var(--orange);
    text-decoration: none;
    transition: .2s color;
    font-weight: 700;
    &:hover {
      color:var(--deep-purple);
    }
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--orange);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  ul {
    padding:0;
  }

  body::-webkit-scrollbar {
    width: 28px;
  }
  html {
    scrollbar-width: thick;
    scrollbar-color: var(--orange) var(--white);
    scroll-behavior: smooth;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--orange) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  hr {
    border: 4px;
    height: 1em;
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
  li {
    list-style-type: none;
  }

p {margin-bottom: 1rem;}
h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-weight: 400;
  line-height: 1.3;
}
h1 {
  margin-top: 0;
  font-size: 3.052rem;
}
h2 {font-size: 2.441rem;}
h3 {font-size: 1.953rem;}
h4 {font-size: 1.563rem;}
h5 {font-size: 1.25rem;}
small, .text_small {font-size: 0.8rem;}

/* tables */
table {
  margin-top:.8em;
  text-align:left;
}
td {
  text-transform:capitalize;
  padding-bottom:.33em;
  padding-left: 3em;
}
th {
    padding-bottom:.33em;
}

`;

const theme = {
  colors: {
    primary: '#fbfbfc',
  },
};

export default GlobalStyles;
export { theme };

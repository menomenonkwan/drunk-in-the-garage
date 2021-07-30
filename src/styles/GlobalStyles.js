/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

import { createGlobalStyle } from 'styled-components';
import bgFull from '../assets/images/bg-full.jpg';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #101;
    --white: #efe;
    --blue: #5DA3AC;
    --green: #153b3e;
    --red: #CB3D54;
  }

  html {
    font-size: 10px;
    /* scroll-behavior: smooth; */
  }

  body {
    font-size: 2rem;
    background-image: url(${bgFull});
    background-color: rgba(0, 0, 0, 0.5);
    background-attachment: fixed;
    height: 500px; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 1rem;
    border: 3px solid var(--white);
  }

  .container {
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    
  }

  .section-container {
    padding: 12.5vh 0;
  }

  .hero {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    grid-area: 1 / 1;
    position: relative;
    place-items: center;
    display: -ms-grid;
    display: grid;
    background: rgba(0, 0, 0, 0.5);
  }
  
/* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: var(--blue);
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 5px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    -webkit-box-shadow: 0 0 10px var(--red), 0 0 5px var(--red);
            box-shadow: 0 0 10px var(--red), 0 0 5px var(--red);
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: var(--red);
    border-left-color: var(--red);
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
  }
`;

export default GlobalStyles;
import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/livingwell-regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: LivingWell;
    src: url('${font}');
  }

  html {
    font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black, black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: LivingWell;
    font-weight: normal;
    margin: 0;
  }
  a {
    font-family: LivingWell, Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    color: var(--black, black);
    text-decoration: none;
  }
`;

export default Typography;

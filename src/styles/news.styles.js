import styled from 'styled-components';
import bgImg from '../assets/images/bg-full.jpg';


export const Container = styled.div`
  padding: 0;
  padding-top: 12.5vh;
  -webkit-box-pack: stretch;
  -ms-flex-pack: stretch;
          justify-content: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
          align-items: stretch;

  h1 { 
    font-family: unset;
    font-size: 3rem;
    color: var(--white, white);
    text-shadow: 1px 1px 1px black;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  .social-menu-wrapper {
    background: var(--blue);

    svg {
      margin: 3rem 0;
      &:hover {
        color: var(--red, black);
      }
    }
  }
  
  @media (min-width: 768px) {
    padding-top: 10vh;

    h1 {
      font-size: 5rem;
    }
  }

  @media (min-width: 1248px) {
    h1 {
      font-size: 8rem;
    }
  }
`;

export const Wrapper = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly ;
  -ms-flex-pack: space-evenly ;
          justify-content: space-evenly ;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 5rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  background: var(--blue);
  background: -webkit-gradient(linear, left top, right top, color-stop(5%, var(--blue)), color-stop(29%, rgba(93, 163, 172, 0.96))), url(${bgImg}) no-repeat fixed;
  background: -o-linear-gradient(left, var(--blue) 5%, rgba(93, 163, 172, 0.96) 29%), url(${bgImg}) no-repeat fixed;
  background: linear-gradient(to right, var(--blue) 5%, rgba(93, 163, 172, 0.96) 29%), url(${bgImg}) no-repeat fixed;
  background-size: cover;
  background-position: 50% 75%; 
  -webkit-box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5); 
          box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
  padding: 7rem 0 5rem;

  svg {
    &:hover {
      color: var(--red, black);
    }
  }
`;
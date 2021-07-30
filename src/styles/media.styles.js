import styled from 'styled-components';
import bgImg from '../assets/images/bg-full.jpg';

export const Container = styled.div`
  background: var(--black, black);
  padding: 0;
  -webkit-box-pack: stretch;
  -ms-flex-pack: stretch;
          justify-content: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
          align-items: stretch;
  padding-top: 10vh;
`;

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  gap: 5rem;
  background: var(--blue);
  padding: 4rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
          flex: 1;
  -webkit-box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
          box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
  background: -webkit-gradient(linear, left top, right top, color-stop(5%, var(--blue)), color-stop(29%, rgba(93, 163, 172, 0.96))), url(${bgImg}) no-repeat fixed;
  background: -o-linear-gradient(left, var(--blue) 5%, rgba(93, 163, 172, 0.96) 29%), url(${bgImg}) no-repeat fixed;
  background: linear-gradient(to right, var(--blue) 5%, rgba(93, 163, 172, 0.96) 29%), url(${bgImg}) no-repeat fixed;
  background-size: cover;
  background-position: 50% 75%; 

  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
  }

  @media (min-width: 768px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    background: -webkit-gradient(linear, left bottom, left top, color-stop(5%, var(--blue)), to(rgba(93, 163, 172, 0.85))), url(${bgImg}) no-repeat fixed;
    background: -o-linear-gradient(bottom, var(--blue) 5%, rgba(93, 163, 172, 0.85)), url(${bgImg}) no-repeat fixed;
    background: linear-gradient(to top, var(--blue) 5%, rgba(93, 163, 172, 0.85)), url(${bgImg}) no-repeat fixed;
  }
`;
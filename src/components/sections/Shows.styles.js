import styled from 'styled-components';
import bgImg from '../../assets/images/red_kit.jpg';

export const StyledSection = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  padding: 0;
  background: -webkit-gradient(linear, left top, right top, color-stop(20%, var(--white, white)), to(rgba(238, 255, 238, 0.8)) ), url(${bgImg}) no-repeat fixed;
  background: -o-linear-gradient(left, var(--white, white) 20%, rgba(238, 255, 238, 0.8) ), url(${bgImg}) no-repeat fixed;
  background: linear-gradient(to right, var(--white, white) 20%, rgba(238, 255, 238, 0.8) ), url(${bgImg}) no-repeat fixed;
  background-size: cover;
  background-position: 50% 75%; 

  @media (min-width: 768px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; 
    min-height: -webkit-fit-content; 
    min-height: -moz-fit-content; 
    min-height: fit-content;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    padding: 12.5vh 5%;
    -webkit-box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
            box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
  }

  @media (min-width: 1200px) {
    min-height: 80vh;
  }
`;

export const StyledDiv = styled.div`
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
  width: 90%;
  margin: 0 auto 5rem auto;

  h2 {
    font-size: 5rem;
    margin: 5rem 0;
  }

  @media (min-width: 768px) {
    -webkit-box-flex: 1.25;
        -ms-flex: 1.25;
            flex: 1.25;

    h2 {
      -ms-flex-item-align: start;
          align-self: flex-start;
    }
  }
`;

export const Calendar = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 2rem 0;

  .date {
    background: var(--blue);
    min-width: 80px;
    height: 80px;
    color: var(--white, white);
    font-size: 4rem;
    -ms-flex-item-align: stretch;
        -ms-grid-row-align: stretch;
        align-self: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin: 0 2rem;
  }

  .location {
    font-weight: lighter;
    text-align: center;
    margin: 0 1rem;
  }

  a {
    margin: 0 2rem;
    font-size: 2.25rem;
  }
`;

export const Frame = styled.div`
  -webkit-perspective: 1000px;
  perspective: 1000px;
  margin: 5rem 0;

  > div {
    width: 80%;
    margin: auto;
    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    -webkit-transform: rotateX(15deg);
            transform: rotateX(15deg);
  }

  @media (min-width: 768px) {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;  

    > div {
    width: 85%;
    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    -webkit-transform: rotateY(25deg);
            transform: rotateY(25deg);
    }
  }
`;
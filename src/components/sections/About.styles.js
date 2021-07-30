import styled from 'styled-components';
import bgImg from '../../assets/images/what_ales_you_cover.jpg';

export const StyledSection = styled.section`
  background: -webkit-gradient(linear, right top, left top, color-stop(60%, var(--white, white)), to(rgba(238, 255, 238, 0.85)) ), url(${bgImg}) no-repeat fixed;
  background: -o-linear-gradient(right, var(--white, white) 60%, rgba(238, 255, 238, 0.85) ), url(${bgImg}) no-repeat fixed;
  background: linear-gradient(270deg, var(--white, white) 60%, rgba(238, 255, 238, 0.85) ), url(${bgImg}) no-repeat fixed;
  background-size: cover;
  background-position: 50% 75%; 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;

  @media (min-width: 768px) {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    background: -webkit-gradient(linear, right top, left top, color-stop(60%, var(--white, white)), color-stop(90%, rgba(141, 153, 174, 0.5)), to(transparent)), url(${bgImg}) no-repeat fixed;
    background: -o-linear-gradient(right, var(--white, white) 60%, rgba(141, 153, 174, 0.5) 90%, transparent), url(${bgImg}) no-repeat fixed;
    background: linear-gradient(270deg, var(--white, white) 60%, rgba(141, 153, 174, 0.5) 90%, transparent), url(${bgImg}) no-repeat fixed;
    background-position: 100% 75%; 
    background-size: cover;
    -webkit-box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
            box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
  }
`;

export const StyledText = styled.div`
  width: 80%;
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
  -webkit-box-align: start;
  -ms-flex-align: start;
          align-items: flex-start;
  padding: 0;

  .about-primary { 
    font-size: 3rem;
    line-height: 1.25;
    font-weight: lighter;
   }
  .about-secondary { 
    font-size: 2.5rem;
    line-height: 1.35;
    font-weight: lighter;
    margin: 1rem 2rem;
   }

   div {
    margin-top: 4rem;
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
   }

   a {
    background: var(--blue);
    font-size: 3rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    -webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  @media (min-width: 768px) {
    width: 55%;
    padding: 0 5rem;

    .about-primary {
      margin-top: 0;
      line-height: 1.25;
      font-size: 2.5rem;
      padding: 0 2rem 2rem;
    }

    .about-secondary {
      font-size: 2rem;
      border-left: 5px solid var(--blue);
      padding: 0 7rem;
      line-height: 1.5; 
    }

    div {
      -ms-flex-item-align: start;
          align-self: flex-start;
      margin: 5rem 0 0rem 2rem;
    }
  }

  @media (min-width: 900px) {
    min-height: 90vh;
  }
`;
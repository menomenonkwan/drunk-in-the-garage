import styled from 'styled-components';
import bg from '../../assets/images/peace.jpg';

export const StyledSection = styled.section`
  --percent: 10%;
  background: var(--blue);
  background: -webkit-gradient(linear, left top, right top, from(var(--blue, blue)), to(rgba(93, 163, 172, 0.75))), url(${bg}) no-repeat fixed;
  background: -o-linear-gradient(left, var(--blue, blue) var(--percent), rgba(93, 163, 172, 0.75)), url(${bg}) no-repeat fixed;
  background: linear-gradient(to right, var(--blue, blue) var(--percent), rgba(93, 163, 172, 0.75)), url(${bg}) no-repeat fixed;
  background-position: 100% 100%; 
  -webkit-box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5); 
          box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
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
  min-height: -webkit-fit-content;
  min-height: -moz-fit-content;
  min-height: fit-content;

  h2 {
    margin: 2rem 0 4rem 0;
    font-size: 5rem;
  }

  @media (min-width: 700px) {
    --percent: 60%;
  }
`;

export const AlbumWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  gap: 5rem;

  @media (min-width: 900px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  }

  @media (min-width: 1280px) {
    gap: 10rem;
  }
`;

export const AlbumCard = styled.div`
  background: rgba(0,0,0,0.1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  padding: 2rem;
  -webkit-box-shadow: 0 2px 3px 3px rgba(0,0,0,0.25);
          box-shadow: 0 2px 3px 3px rgba(0,0,0,0.25);
  width: 100%;

  h3 {
    text-transform: uppercase;
    font-size: 1.75rem;
    font-family: Lato, sans-serif;
    font-weight: lighter;
    padding: 1rem 0;
    margin-bottom: 1rem;
  }

  img {
    -webkit-box-shadow: 0 2px 10px rgba(0,0,0,0.5);
            box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }
`;

export const LinkBox = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  background: rgba(0,0,0,0.1);
  width: 100%;
  padding: 0 1rem;

  &:nth-of-type(even) {
    background: rgba(0,0,0,0.2);
  }

  a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: var(--white, white);
    border: none;
    margin: 0;
    font-size: 3rem;
    padding: 0 1rem;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
      color: var(--red);
    }
  }
  
  p {
    font-size: 1.75rem;
  }
`;

export const Links = styled.div`
  display: -webkit-box;  
  display: -ms-flexbox;  
  display: flex;
`;
import { motion } from 'framer-motion';
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
    text-align: center;
    font-weight: lighter;

    p {
      a {
        &:hover {
          color: var(--red, white);
        }
      }
    }

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

  .modal-open{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }

  button {
    background: var(--blue);
    font-Family: 'LivingWell', 'Lato', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    -webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

    &:hover {
      cursor: pointer;
    }
  }
`;


export const Wrapper = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: var(--blue);
  background: -webkit-gradient(linear, left top, right top, color-stop(5%, var(--blue)), color-stop(29%, rgba(93, 163, 172, 0.96))), url(${bgImg}) no-repeat fixed;
  background: -o-linear-gradient(left, var(--blue) 5%, rgba(93, 163, 172, 0.96) 29%), url(${bgImg}) no-repeat fixed;
  background: linear-gradient(to right, var(--blue) 5%, rgba(93, 163, 172, 0.96) 29%), url(${bgImg}) no-repeat fixed;
  background-size: cover;
  background-position: 50% 75%; 
  -webkit-box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5); 
          box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
  padding: 2.5rem 2rem 5rem;

  .my-masonry-grid {
    display: -webkit-box; 
    display: -ms-flexbox; 
    display: flex;
    margin-left: -3rem; 
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 3rem; 
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div { 
    margin-bottom: 3rem;
  }
`;


export const Frame = styled(motion.div)`
  -webkit-box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 3px;
  overflow: hidden;
  display: -ms-grid;
  display: grid;
  grid-template: 1 / 1;
  
  .image-overlay {
    background: #CB3D5499;
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    grid-area: 1 / 1;
    position: relative;
    display: -ms-grid;
    display: grid;
    justify-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
            align-items: center;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
            transform: translateY(100%);
  }

  @media (min-width: 768px) {
    &:hover {
      .image-overlay {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
`;


export const InnerFrame = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  grid-area: 1 / 1;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
`;


export const Modal = styled.div`
  background: #110011dd;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: 2;

  h2 {
    color: var(--blue, white);
    margin: 1rem 0;
  }

  h4 {
    color: var(--white, white);
    font-family: "Lato", sans-serif;
    margin: 1rem 0;
  }

  button {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
`;
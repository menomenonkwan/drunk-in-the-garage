import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  justify-content: flex-end;
  
  @media (min-width: 1280px) {
    justify-content: center;
    position: relative;
  }
`;

export const Wrapper = styled(motion.div)`
  width: 90%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  margin-top: 10vh;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    background: rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
            box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
  }
`;

export const StyledTextBox = styled.div`
  background: rgba(0,0,0,0.75);
  color: var(--white, white);
  padding: 3rem;
  margin: 4rem auto;
  text-align: center;
  -webkit-box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
          box-shadow: 0px 5px 10px rgba(0,0,0,0.5);

  p {
    line-height: 1.5;
    font-size: 2.5rem;
    font-weight: lighter;
    padding-bottom: 2rem;
  }

  a {
    font-size: 3.5rem;
    color: var(--black, black);
    background: var(--blue);
    padding: 1rem 2rem;
    border-radius: 1rem;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    display: block;

    &:hover {
      color: var(--white, white);
    }
  }

  @media (min-width: 500px) {
    a {
      display: unset;
    }
  }
  
  @media (min-width: 768px) {
    margin-top: 8rem;
  }

  @media (min-width: 1280px) {
    background: rgba(0,0,0,0.5);
    width: 50%;
    margin: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    padding: 5rem;
    text-align: left;

    h1 {
      font-size: 6rem;
    }

    p {
      line-height: 1.5;
      font-size: 2.25rem;
      font-weight: lighter;
      padding-bottom: 2rem;
    }

    a {
      font-size: 3rem;
      padding: 1rem 2rem;
      border-radius: 1rem;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: none;

@media (min-width: 768px) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;  
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;

  div {
    margin: 0 1rem;
  }
  
  ul {
    margin: 0;
  }

  svg {
    font-size: 3rem;
    background: none;
    padding: 0 1rem;
    margin-top: 4rem;
    }
  }

  @media (min-width: 1280px) {
    position: absolute;
    bottom: 2rem;
    left: 0;
  }
`;
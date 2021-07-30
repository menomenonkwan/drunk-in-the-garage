import styled from 'styled-components';
import background from '../../assets/images/ditg_cans.jpg';
import formBg from '../../assets/images/what_ales_you_cover.jpg';

export const Container = styled.div`  
  background: var(--blue);
  background: -webkit-gradient(linear, right top, left top, color-stop(10%, var(--blue)), to(rgba(93, 163, 172, 0.8))), url(${background}) no-repeat fixed;
  background: -o-linear-gradient(right, var(--blue) 10%, rgba(93, 163, 172, 0.8)), url(${background}) no-repeat fixed;
  background: linear-gradient(to left, var(--blue) 10%, rgba(93, 163, 172, 0.8)), url(${background}) no-repeat fixed;
  background-size: cover;
  color: var(--white, white);
  padding: 0;
  padding-top: 5rem;
  min-height: 100vh;
  position: relative;

  h2 {
    color: var(--black, black);
    font-size: 5rem;
    padding: 0;
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
  }

  li {
    margin: 0;
  }

  svg {
    padding: 1.3rem;

    &:hover {
      color: var(--red, black);
    }
  }

  @media (min-width: 1024px) {
    background: url(${background}) fixed no-repeat;
    background-color: var(--blue);
    background-position: right top; 
    background-size: 40% 100%;
    padding: 0;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
            box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
    
    div {
      margin-right: 0;
    }
    
    ul, li {
    margin: 0;
    font-size: 2.25rem;
    }

    svg {
      padding-right: 0;
    }

    h2 {
      -ms-flex-item-align: end;
          align-self: flex-end;
      position: relative;
      margin-bottom: 3rem;
    }
  }
`;

export const Wrapper = styled.div`
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
  width: 100%;

  @media (min-width: 1024px) {
    background: -webkit-gradient(linear, right top, left top, color-stop(10%, var(--blue)), to(rgba(93, 163, 172, 0.8))), url(${formBg}) no-repeat fixed;
    background: -o-linear-gradient(right, var(--blue) 10%, rgba(93, 163, 172, 0.8)), url(${formBg}) no-repeat fixed;
    background: linear-gradient(to left, var(--blue) 10%, rgba(93, 163, 172, 0.8)), url(${formBg}) no-repeat fixed;
    background-position: 100% 75%; 
    background-size: cover;
    width: 50%;
    padding: 5rem 10% 5rem 0;
    min-height: 100vh;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
    padding-bottom: 5rem;
  }
`;

export const StyledForm = styled.form`
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
  width: 100%;

  input,textarea {
    width: 80%;
    font-family: inherit;
    padding: 0.75rem 1rem;
    margin: 1rem 0;
    border: none;
    letter-spacing: 0.1rem;
    outline: 2px solid var(--blue);

    &::-webkit-input-placeholder {
      font-weight: lighter;
    }

    &::-moz-placeholder {
      font-weight: lighter;
    }

    &:-ms-input-placeholder {
      font-weight: lighter;
    }

    &::-ms-input-placeholder {
      font-weight: lighter;
    }

    &::placeholder {
      font-weight: lighter;
    }

    &:focus {
      outline: 2px solid var(--red);
    }
  }

  button {
    color: var(--blue);
    text-transform: uppercase;
    width: 40%;
    padding: 1rem 2rem;
    margin-top: 4rem;
    border-radius: 0.5rem;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      color: var(--black, black);
    }
  }

  @media (min-width: 1024px) {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
  }
`;

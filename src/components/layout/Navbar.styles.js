import styled from 'styled-components';

export const NavStyles = styled.nav`
  background: var(--black, black);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  height: 10vh;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  -webkit-box-shadow: 0px 3px 5px rgba(0,0,0,0.3);
          box-shadow: 0px 3px 5px rgba(0,0,0,0.3);

  .open {
    cursor: pointer;
    margin: .5rem;
  }

  .exit {
    width: 2em;
    float: right;
    margin: 3rem 2rem;
    cursor: pointer;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    visibility: hidden;
    -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
            transform: translateX(50%);
    opacity: 0;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
    z-index: 1;
  }

  .links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background: #1D2226;
    width: 66%;
    visibility: hidden;
    -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
            transform: translateX(50%);
    opacity: 0;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    transition: all .4s;
  }

  .open-nav {
    visibility: unset;
    opacity: 1;
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
  }

  ul {
    margin: 4em 0 0 0;
    padding: 0;
    list-style-type: none;
  }

  li a { 
    display: block;
    padding: 2rem 5rem;
    text-align: left;
    font-size: 3.5rem;
    text-decoration: none;
    color: var(--blue);
   
    &:hover {
      color: #84d9c4;
      background: var(--white, white);
    }
  }

  .logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }

  .budcap {
    position: fixed;
    top: -2rem;
    left: -2rem;
  }

  @media (min-width: 500px) {
    .budcap {
      position: relative;
      top: 0;
      left: 0;
    }
  }

  @media (min-width: 600px) {
    .links {
      width: 50%;
    }
  }

  @media (min-width: 900px) {
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
    height: auto;

    .open, .exit {
        display: none;
    }

    .modal, .links {
        visibility: unset;
        background: none;
        position: unset;
        height: auto;
        width: auto;
        opacity: 1;
        -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
                transform: translateX(0);
    }

    .links {
      margin: auto;
    }

    ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        margin: 0.5rem 0 0 0;
    }

    li {
      --rotate: -2deg;
      -webkit-transform: rotate(var(--rotate));
          -ms-transform: rotate(var(--rotate));
              transform: rotate(var(--rotate));
      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
      
      &:nth-child(0) {
        --rotate: 2.5deg;
      }
      &:nth-child(2) {
        --rotate: 2.5deg;
      }
      &:nth-child(4) {
        --rotate: 2.5deg;
      }
      &:nth-child(5) {
        /* --rotate: 5deg; */
        position: relative;
        &:hover {
          --rotate: 0deg;
        }
      }
      &:nth-child(6) {
        --rotate: 0deg;
      }
      &:nth-child(7) {
        --rotate: 2.5deg;
      }
      &:hover {
        --rotate: 5deg;
      }
    }
    
    li a {
        display: block;
        font-size: 2.75rem;
        padding: 1rem 1.5rem;
        font-weight: lighter;

        &:hover {
          background: unset;
        }
    }
  }

  @media (min-width: 1200px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;

    ul {
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end;
    }

    .links {
      margin-left: auto;
    }
  }
`;

export const Dropdown = styled.li`
  @media (min-width: 900px) {
    &:hover {
      ul {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
                transform: translateY(0);
      }
    }
  }
`;

export const DropdownList = styled.ul`
  display: none;

  @media (min-width: 900px) {
    position: absolute;
    top: 5rem;
    left: 0;
    background: red;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    opacity: 0;
    -webkit-transform: translateY(-2.5rem);
        -ms-transform: translateY(-2.5rem);
            transform: translateY(-2.5rem);
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background: var(--blue);

    li {
      -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
              transform: rotate(0);

      a {
        font-size: 2.25rem;
        font-family: unset;
        font-weight: bold;
        color: var(--black, black);
      }

      &:hover {
        background: #84d9c4;

        a {
          color: var(--blue);
        }
      }
    }
  }
`;
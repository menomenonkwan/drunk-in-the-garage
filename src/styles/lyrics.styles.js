import styled from 'styled-components';

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
  background: var(--white, white);
  -webkit-box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
          box-shadow: inset -5px 5px 200px 5px rgba(0,0,0,0.5);
  padding: 2.5rem 2rem 5rem;
  
  form {
    width: 90%;
  }
  
  select {
    width: 100%;
    background: var(--blue);
    font-family: 'LivingWell', serif;
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    -webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    outline: transparent;
  }
  
  option {
    font-size: 2rem;
    width: 50%;
  }

  h3 {
    font-family: unset;
    font-style: italic;
    font-size: 1.65rem;
    margin: 1.5rem 0 2.5rem;
  }

  p {
    font-weight: lighter;
    margin-bottom: 0;
    font-size: 1.85rem;
    line-height: 1.1;
    overflow-wrap: break-word;
    -webkit-hyphens: auto;
        -ms-hyphens: auto;
            hyphens: auto;
    width: 100%;
  }

  @media (min-width: 768px) {
    form {
      text-align: center;
    }

    select {
      width: auto;
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
      line-height: 0.5;
      width: auto;
    }
  }
`;
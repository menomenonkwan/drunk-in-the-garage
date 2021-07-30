import styled from 'styled-components';

export const Container = styled.div`
  padding: 12.5vh 0rem;

  h2 { 
    font-size: 5rem;
    margin: 5rem auto;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 12.5vh 10rem;
  }
`;

export const Grid = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: -ms-grid;
  display: grid;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 10rem;

  @media (max-width: 1200px) {
      --columns: 1;
  }
`;

export const Card = styled.div`
  background: var(--white, white);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 1rem;
  border-radius: 3px;
  -webkit-box-shadow: 0px 20px 0px -10px var(--blue, white), 0px -20px 0px -10px var(--blue, white), 20px 0px 0px -10px var(--blue, white), -20px 0px 0px -10px var(--blue, white), 0px 0px 0px 10px var(--blue, red), 0px 9px 15px 8px rgba(0,0,0,0);
          box-shadow: 0px 20px 0px -10px var(--blue, white), 0px -20px 0px -10px var(--blue, white), 20px 0px 0px -10px var(--blue, white), -20px 0px 0px -10px var(--blue, white), 0px 0px 0px 10px var(--blue, red), 0px 9px 15px 8px rgba(0,0,0,0);
  background: -o-linear-gradient(317deg, var(--white), #cdc);
  background: linear-gradient(133deg, var(--white), #cdc);
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  
  @media (min-width: 800px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  } 
  
  @media (min-width: 1200px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  
  @media (min-width: 1500px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  }
`;

export const LeftColumn = styled.div`
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
  min-width: 150px;
  background: var(--blue);

  .card-name {
    padding: 1rem 0 0.5rem;
    font-size: 3rem;
  }
  
  p {
    margin: 0;
  }
  
  .card-instrument {
    font-weight: lighter;
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  .card-social {
    margin-top: auto;
    padding: 2rem 0;
    width: 100%;
    text-align: center;
    background: -webkit-gradient(linear, left bottom, left top, from(rgba(0,0,0,0.12)), to(transparent));
    background: -o-linear-gradient(bottom, rgba(0,0,0,0.12), transparent);
    background: linear-gradient(to top, rgba(0,0,0,0.12), transparent);
  }

  @media (min-width: 768px) {
    padding-right: 1rem;
  }
`;

export const RightColumn = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
          justify-content: flex-end;
  padding: 2rem 4rem;

  p {
    margin: 0;
    margin-bottom: auto;
    line-height: 1.25;
    font-weight: lighter;
    font-size: 2rem;
  }

  fieldset {
    background: #CB3D5420;
    margin-top: 4rem;

    p {
      font-size: 1.75rem;
    }
  }

  legend {
    padding: 0 1rem;
    font-weight: bolder;
  }
`;
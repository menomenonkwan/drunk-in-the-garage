import React from 'react'
import styled from 'styled-components';
import Seo from '../components/Seo';

const Wrapper = styled.div`
  background: var(--white, white);
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
  padding: 2rem;
  border-radius: 5px;
  -webkit-box-shadow: 0 2px 5px 4px rgba(0, 0, 0, 0.25);
          box-shadow: 0 2px 5px 4px rgba(0, 0, 0, 0.25);
`;

export default function NotFoundPage() {
  return (
    <>
      <Seo title="OOPS" />
      <div className="container">
        <Wrapper>
          <h2>404</h2>
          <p>Oh No! This page doesn't exist</p>
        </Wrapper>
      </div>
    </>
  )
}

import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: var(--black, black);
  color: var(--blue);
  text-align: center;
  font-weight: lighter;
  line-height: 1;
  padding: 2rem;

  p {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Built by Brannon Lee</p>
      <p>&copy; {new Date().getFullYear()} Drunk In The Garage</p>
    </StyledFooter>
  )
}

import React from 'react';
import { motion } from 'framer-motion';
import { FaAmazon, FaItunesNote } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 3rem;
  margin: 1rem;
  
  ul {
    padding: 0;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  li {
    margin: 0 1rem;
  }
  
  svg {
    color: var(--white, white);
    padding: 0 2rem;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      color: var(--blue);
    }
  }

  @media (min-width: 768px) {
    li {
      margin: 0;
    }
  }
`;

export default function SocialMenu() {
  return (
    <Wrapper>
      <ul>
        <motion.li 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://www.amazon.com/s?k=Drunk+In+the+Garage&i=digital-music&search-type=ss&ref=ntt_srch_drd_B0056L7F4M" target="_blank" rel="noreferrer">
            <FaAmazon />
          </a>
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://music.apple.com/mn/artist/drunk-in-the-garage/445024843" target="_blank" rel="noreferrer">
            <FaItunesNote />
          </a>
        </motion.li>
      </ul>
    </Wrapper>
  )
}



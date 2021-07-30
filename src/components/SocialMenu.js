import React from 'react';
import { motion } from 'framer-motion';
// COMPONENTS
import { FaFacebook, FaInstagram, FaTwitter, FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiReverbnation } from 'react-icons/si';
// STYLES
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
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  
  li {
    margin: 0 1rem;
  }
  
  
  svg {
    padding: 0 2rem;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    color: var(--white, white);

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
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="https://www.facebook.com/drunkinthegarage/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="/#">
            <FaInstagram />
          </a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="https://twitter.com/DrunkNTheGarage" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="https://open.spotify.com/artist/2L6s1A87LferzmCQ0GTTDM" target="_blank" rel="noreferrer">
            <FaSpotify />
          </a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="https://www.reverbnation.com/drunkinthegarage" target="_blank" rel="noreferrer">
            <SiReverbnation />
          </a>
        </motion.li>     

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="https://www.youtube.com/channel/UCSVkRhLqLlnh75yjyjd-7NQ" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </motion.li>
      </ul>
    </Wrapper>
  )
}




import { motion } from 'framer-motion';
import React from 'react';
// COMPONENTS
import SocialMenu from '../SocialMenu';
// STYLES
import { Container, Wrapper, StyledForm } from './Contact.styles';


export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Container id="contact" className="container">
      <Wrapper>
        <h2>Get in Touch</h2>
        <SocialMenu />
        <StyledForm onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder="Name..." />
          <input type="email" name="email" id="email" placeholder="Email..." />
          <input type="text" name="subject" id="subject" placeholder="Subject..." />
          <textarea name="message" id="message" rows="5" placeholder="Message..." />
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send
          </motion.button>
        </StyledForm>       
      </Wrapper>

    </Container>
  )
}

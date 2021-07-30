import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
// STYLES
import { StyledSection, StyledText } from './About.styles';


export default function About() {
  return (
    <StyledSection id="about" className="section-container"> 
      <StyledText>
        <p className="about-primary"><strong>Drunk In The Garage, the world's best bar band.</strong> There's a bio cooming soon, maybe, but in the meantime enjoy your favorite drink. I'm not sure what else to tell ya but "Have a Great Day, buddy"! Oh, and in all seriousness, be a decent human being, drive responsibly, and recycle.</p>
        
        <p className="about-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem dicta alias quaerat quasi, labore voluptatem accusantium. Placeat qui aperiam quis vel. At est numquam excepturi iste nulla corporis, eos sapiente ducimus consequatur ullam modi ea recusandae voluptatum temporibus soluta omnis minus quasi officia vero, odio impedit. </p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/bio">Meet The Band</Link>
        </motion.div>

      </StyledText>
    </StyledSection>
  )
}

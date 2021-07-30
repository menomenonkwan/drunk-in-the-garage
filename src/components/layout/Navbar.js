import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import pop from '../../assets/audio/pop.mp3';
// STYLES
import { NavStyles, Dropdown, DropdownList } from './Navbar.styles'; 


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => { setOpen(!open); }

  const playAudio = () => {
    const audio = new Audio(pop);
    audio.play();
  }
  
  return (
    <NavStyles>
      <div className="logo">
        <motion.div whileTap={{ scale: 0.8 }} onClick={playAudio}>
          <StaticImage 
            src="../../assets/images/budcap.png" 
            alt="" 
            placeholder="blurred" 
            layout="fixed"
            height={65}
            className="budcap"
          />
        </motion.div>
        <StaticImage 
          src="../../assets/images/logo.png" 
          alt="Drunk In The Garage" 
          placeholder="blurred" 
          layout="fixed"
          height={70}
        />
      </div>

      <svg height="32px" id="menu-btn" class="open" viewBox="0 0 32 32" onClick={handleClick}>
        <path fill="var(--blue, white)" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
      </svg>

      <div className={open ? "modal open-nav" : "modal"}>
        <div className={open ? "links open-nav" : "links"}>
          <svg viewBox="0 0 24 24" id="exit-btn" class="exit" onClick={handleClick}>
            <path id="exit" fill="var(--blue, white)" d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" />
          </svg>

          <ul>
            <li><Link to="/" onClick={handleClick}>Home</Link></li>
            <li><Link to="/#about" onClick={handleClick}>About</Link></li>
            <li><Link to="/#music" onClick={handleClick}>Music</Link></li>
            <li><Link to="/#shows" onClick={handleClick}>Shows</Link></li>
            <Dropdown>
              <Link to="/media" onClick={handleClick}>Media</Link>
              <DropdownList>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/lyrics">Lyrics</Link></li>
              </DropdownList>
            </Dropdown>           
            <li><Link to="/#contact" onClick={handleClick}>Contact</Link></li>
          </ul>     
        </div> 
      </div>
    </NavStyles>
  )
}

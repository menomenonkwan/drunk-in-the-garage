import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
// COMPONENTS
import { FaBeer } from 'react-icons/fa';
// STYLES
import { StyledSection, StyledDiv, Calendar, Frame } from './Shows.styles';


export default function Shows() {
  return (
    <StyledSection id="shows" className="section-container">
      <Frame>
        <div>
          <StaticImage src={"../../assets/images/marching_band.jpg"} alt="Doo Dah Parade 2013" layout="fullWidth"/>
        </div>
      </Frame>

      <StyledDiv>
        <h2>Shows</h2>
        <Calendar>
          <div className="date"><FaBeer /></div>
          <p className="location">no scheduled shows</p>
          <a href="/#shows">More info</a>
        </Calendar>
      </StyledDiv>
    </StyledSection>
  )
}

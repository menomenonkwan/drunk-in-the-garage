import React from 'react'
import { Link } from 'gatsby'
// COMPONENTS
import Video from '../Video';
import SocialMenu from '../SocialMenu';
import PurchaseMenu from '../PurchaseMenu';
// STYLES
import { Container, Wrapper, StyledTextBox, SocialWrapper } from './Home.styles';


export default function Home() {
  return (
    <Container className="container">
      <Wrapper
        initial={{ opacity: 0, y: "-5rem" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1}}}
      >
        <StyledTextBox>
          <h1>Boozin' And Cruzin' Official Video</h1>
          <p>Off the new album <strong>"What Ale's You"</strong>. Available now and forever to stream or purchase at many popular online locations. Cheers!</p>
          <Link to="/#music">Listen Now</Link>
        </StyledTextBox>

        <Video 
          videoSrcURL="https://www.youtube.com/embed/-jWj3eU0bhE"
          videoTitle="Boozin' And Cruzin' - Official Video"
        />
      </Wrapper>

      <SocialWrapper>
        <PurchaseMenu />
        <SocialMenu />
      </SocialWrapper>

    </Container>
  )
}


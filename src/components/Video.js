import React from "react";
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;

  .responsive-iframe {
    -webkit-box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
            box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 65%;
  }

  @media (min-width: 1024px) {
    text-align: center;
    width: 50%;

    .responsive-iframe {
      width: 80%;
    }
  }

  @media (min-width: 1280px) {
    .responsive-iframe {
      -webkit-box-shadow: none;
              box-shadow: none;
    }
  }
`;

const Video = ({ videoSrcURL, videoTitle, ...props }) => (

  <VideoContainer className="video">   
    <iframe
      className="responsive-iframe"
      src={videoSrcURL}
      title={videoTitle}
      width="560" height="315"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoContainer>
)
export default Video
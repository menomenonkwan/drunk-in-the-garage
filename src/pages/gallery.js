import React, { useState } from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
// COMPONENTS
import Seo from '../components/Seo';
import SocialMenu from '../components/SocialMenu';
import Masonry from 'react-masonry-css'
// STYLES
import { Container, Wrapper, Frame, InnerFrame, Modal } from '../styles/gallery.styles';


function SingleImage({image, handleOpen}) { 
  const singleImg = getImage(image.node.image.asset.gatsbyImageData);
  return (
    <Frame 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 }}}
    >
      <InnerFrame>
        <GatsbyImage image={ singleImg } alt="" />
      </InnerFrame>
      <div className="image-overlay">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleOpen(image)}
        >
          View
        </motion.button>
      </div>
    </Frame>
  )
};


export default function Gallery({ data }) {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const images = data.images.edges;
  
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const handleOpen = (image) => {
    setCurrentImg(image.node);
    setOpen(true);
  }

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  }


  return (
    <>
      <Seo title="GALLERY" />
      <Container className="container">

        <Modal 
          className={ open ? "modal-open" : "" }
          onClick={handleClose}
        >
          <button onClick={() => setOpen(false)}>X</button>
          <h2>{ currentImg?.name }</h2>
          <GatsbyImage image={ currentImg?.image.asset.gatsbyImageData } alt={ currentImg?.description } />
          <h4>{ currentImg?.description }</h4>
        </Modal>  

        <div style={{ display: "grid" }}>
          <StaticImage
            style={{ gridArea: "1/1" }}
            layout="fullWidth"
            aspectRatio={5 / 1}
            alt=""
            src={'../assets/images/parade.jpg'}
            formats={["auto", "webp", "avif"]}
          />
          <div className="hero">
            <h1>Gallery</h1>
          </div>
        </div>

        <Wrapper>
          <Masonry
            breakpointCols={ breakpoints }
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images?.map(image => (
              <SingleImage key={ image.node.id } image={ image } handleOpen={handleOpen}/>
            ))}
          </Masonry>
        </Wrapper>
        
        <div className="social-menu-wrapper">
          <p>Find more photos on our <a href="https://www.facebook.com/drunkinthegarage/" target="_blank" rel="noreferrer">Facebook</a> page</p>
          <SocialMenu />
        </div>
      </Container>
    </>
  )
}


export const query = graphql`
  query Images {
    images: allSanityImages {
      edges {
        node {
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          name
          description
          id
        }
      }
    }
  }
`;


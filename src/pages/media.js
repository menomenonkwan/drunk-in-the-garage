import React from 'react'
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
// COMPONENTS
import MediaCard from '../components/MediaCard';
import Seo from '../components/Seo';
// STYLES
import { Container, Wrapper } from '../styles/media.styles';

export default function MediaPage({ data }) {
  const mediaOptions = data.allMarkdownRemark.edges;

  return (
    <>
      <Seo title="MEDIA" />
      <Container className="container">
        <div style={{ display: "grid" }}>
          <StaticImage
            style={{ gridArea: "1/1", maxHeight: 300 }}
            layout="fullWidth"
            aspectRatio={3 / 2}
            alt=""
            src={'../assets/images/what_ales_you_cover.jpg'}
            formats={["auto", "webp", "avif"]}
            placeholder="blurred"
          />
          <div className="hero" 
          style={{ background: "rgba(0, 0, 0, 0.1)" }}
          >
            
          </div>
        </div>
        <Wrapper>      
          {mediaOptions.map((option, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: "5rem" }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 }}}
            >
              <Link to={option.node.frontmatter.slug}>
                <MediaCard key={i} media={option} />
              </Link>
            </motion.div>
          ))}
        </Wrapper>
      </Container>
    </>
  ) 
}

export const query = graphql`
  query Media {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            title
            slug
            thumb {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
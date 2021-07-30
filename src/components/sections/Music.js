import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
// COMPONENTS
import { FaSpotify } from 'react-icons/fa';
import { FaAmazon, FaItunesNote } from 'react-icons/fa';
// STYLES
import { StyledSection, AlbumWrapper, AlbumCard, LinkBox, Links } from './Music.styles';


function SingleRelease(release) {
  const {name, amazonUrl, itunesUrl, spotifyUrl, image } = release.release.node;

  return (
    <AlbumCard>
      <img src={image.asset.gatsbyImageData.images.fallback.src} alt="album cover" width={250} height={250}/>
      <h3>{name}</h3>
      <LinkBox>
        <p>Purchase:</p>
        <Links>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={amazonUrl} target="_blank" rel="noreferrer">
              <FaAmazon />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={itunesUrl} target="_blank" rel="noreferrer">
              <FaItunesNote />
            </a>
          </motion.div>
        </Links>             
      </LinkBox>
      <LinkBox>
        <p>Listen:</p>
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
          <a href={spotifyUrl} target="_blank" rel="noreferrer">
            <FaSpotify />
          </a>
        </motion.div>             
      </LinkBox>
    </AlbumCard>
  );
}

export default function Music() {
  const releases = useStaticQuery(graphql`
    query {
      albums: allSanityAlbums {
        edges {
          node {
            _id
            name
            amazonUrl
            itunesUrl
            spotifyUrl
            image {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const albums = releases.albums.edges;

  return (
    <StyledSection id="music" className="section-container">     
      <h2>Releases</h2> 
      <AlbumWrapper>
        {albums?.map(album => (
          <SingleRelease key={album.id} release={album} />
        ))}
      </AlbumWrapper>
    </StyledSection>
  )
}


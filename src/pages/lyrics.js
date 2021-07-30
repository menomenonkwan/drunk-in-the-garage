import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
// COMPONENTS
import Seo from '../components/Seo';
// STYLES
import { Container, Wrapper } from '../styles/lyrics.styles';


export default function Lyrics({ data }) {
  const [current, setCurrent] = useState(null);
  const [currentFormatted, setCurrentFormatted] = useState(null);
  const lyrics = data.lyrics.edges;

  useEffect(() => {
    setCurrentFormatted(current?.node.lyric.map(block => block.children[0].text).join('').split('\n'));
  }, [current]);

  const handleClick = (e) => {
    setCurrent(lyrics.find(lyric => e.target.value === lyric.node.id))
  }


  return (
    <>
      <Seo title="LYRICS" />
      <Container className="container">
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
            <h1>Song Lyrics</h1>
          </div>
        </div>

        <Wrapper>
          <form>
            <select onChange={handleClick}>
              <option value="" disabled selected>Select A Song</option>
                {lyrics?.map(lyric => (
                  <option 
                    key={lyric.node.id}
                    value={lyric.node.id}
                  >{lyric.node.name}</option>
                ))}
            </select>
          </form>

          {current ? <h3>lyrics by: {current?.node.writer}</h3> : null}
          {currentFormatted?.map((block, i) => (
            <p key={i}>{block}</p>
          ))}
        </Wrapper>
      </Container>
    </>
  )
}

export const query = graphql`
  query SongLyrics {
    lyrics: allSanityLyrics(sort: {fields: name}) {
      edges {
        node {
          id
          name
          writer
          lyric {
            children {
              text
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;
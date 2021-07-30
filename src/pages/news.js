import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql } from 'gatsby';
// COMPONENTS
import SocialMenu from '../components/SocialMenu';
import Seo from '../components/Seo';
import NewsCard from '../components/NewsCard';
// STYLES
import { Container, Wrapper } from '../styles/news.styles';


export default function News({ data }) {
  const news = data.news.nodes;

  return (
    <>
      <Seo title="NEWS" />
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
            <h1>NEWS</h1>
          </div>
        </div>

        <Wrapper>
          {news?.map((article) => (
            <NewsCard key={article._id} article={article}/>
          ))}
        </Wrapper>

        <div className="social-menu-wrapper">
          <SocialMenu />
        </div>
      </Container>
    </>
  )
}

export const query = graphql`
  query NewsQuery {
    news: allSanityNews {
      nodes {
        _id
        _type
        name
        date
        image {
          asset {
            gatsbyImageData(
              height: 200, 
              width: 625, 
              placeholder: BLURRED
            )
          }
        }
        news {
          _type
          style
          children {
            _type
            marks
            text
          }
        }
      }
    }
  }
`;
import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
// COMPONENTS 
import Seo from '../components/Seo';
// STYLES 
import { Container, Grid, Card, LeftColumn, RightColumn } from '../styles/bio.styles';


function SingleBio({member}) {
  const { name, instrument, social, description, quote, favorite, image } = member;

  return (
    <Card>
      <LeftColumn>
        <GatsbyImage image={ image.asset.gatsbyImageData } alt={name} />
        <h3 className="card-name">{ name }</h3>
        <p className="card-instrument">{ instrument }</p>
        <p className="card-social">{ social }</p>
      </LeftColumn>
      <RightColumn>
        <p className="card-bio">{ description }</p>
        <fieldset>
          <legend>Quote:</legend>
          <p className="card-quote">{ quote }</p>
        </fieldset>
        <fieldset>
          <legend>Favorite Brew:</legend>
          <p className="card-fav">{ favorite }</p>
        </fieldset>
      </RightColumn>
    </Card>
  )
}

export default function BioPage({ data }) {
  const members = data.bandMembers.nodes;

  return (
    <>
      <Seo title="ABOUT" />
      <Container className="container">
        <h2>Meet The Band</h2>
        <Grid>
          {members?.map(member => 
            <SingleBio key={member.id} member={member} />
          )}
        </Grid>
      </Container>
    </>
  )
}

export const query = graphql`
  query BandMemberQuery {
    bandMembers: allSanityPerson(sort: {fields: _createdAt}) {
      nodes {
        name
        id
        instrument
        social
        description
        quote
        favorite
        image {
          asset {
            gatsbyImageData(width: 250)
          }
        }
      }
    }
  }
`;


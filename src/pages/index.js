import React from 'react'
import IntroCard from '../components/IntroCard'
import Container from '../components/Container'
import SEO from '../components/SEO'
import styled from 'styled-components'
import bgImg from '../images/lassiter-bg-900.jpg'

const BG = styled.article`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top 15vh right 100px;
  height: 100vh;
  width: 100vw;
  z-index: -100;
`

const Index = ({ data }) => {
  const person = data.contentfulPerson
  return (
    <div>
      <SEO />
      <BG />
      <Container>
        <IntroCard
          key={person.id}
          shortBio={person.shortBio}
        />
      </Container>
      <BG />
    </div>
  )
}

export const query = graphql`
query introQuery {
  contentfulPerson(name: { eq: "Lassiter Gregg" }) {
      id
    	image {
        id
        title
    	  sizes(maxWidth: 900) {
          ...GatsbyContentfulSizes_withWebp_noBase64
    	  }
    	}
    	shortBio {
        childMarkdownRemark {
          html
        }
    	}
	}
}
`

export default Index

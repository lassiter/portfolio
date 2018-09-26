import React from 'react'
import IntroCard from '../components/IntroCard'
import Container from '../components/Container'
import SEO from '../components/SEO'
import styled from 'styled-components'
import bgImg from '../images/lassiter-bg-900.jpg'

const TopBG = styled.article`

@media only screen and (max-width: 411px) {
  background-image: none;
  background-repeat: no-repeat;
  }

@media only screen and (min-width: 412px) {
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top 15vh right 100px;
  height: 100vh;
  width: 100vw;
  max-height: 500px;
  z-index: -100;
  }
`
const BG = styled.article`

@media only screen and (max-width: 411px) {
  background-image: none;
  background-repeat: no-repeat;
  }

@media only screen and (min-width: 412px) {
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top 15vh right 100px;
  height: 100vh;
  width: 100vw;
  z-index: -100;
  }
`

const Index = ({ data }) => {
  const person = data.contentfulPerson
  return (
    <div>
      <SEO />
      <TopBG />
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

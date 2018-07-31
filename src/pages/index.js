import React from 'react'
import IntroCard from '../components/IntroCard'
import Container from '../components/Container'
import SEO from '../components/SEO'

const Index = ({ data }) => {
  const person = data.contentfulPerson
  return (
    <div>
      <SEO />
      <Container>
        <IntroCard
          key={person.id}
          image={person.image}
          shortBio={person.shortBio}
        />
      </Container>
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

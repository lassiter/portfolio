import React from 'react'
import Container from '../components/Container'
import SEO from '../components/SEO'
import styled from 'styled-components'

const Headshot = styled.img`
@media only screen and (max-width: 411px) {
  display: inline-block;
  max-width: 100vw;
  margin: 0 .5rem;
  }

@media only screen and (min-width: 412px) {
  display: inline-block;
  max-width: 20vw;
  margin: 0 .5rem;
  }
`
const Bio = styled.div`

@media only screen and (max-width: 411px) {
  position: relative;
  display: inline-block;
  background-color: white;
  padding: .5rem .5rem .75rem;
  margin: .25rem .5rem 0;
  vertical-align: top
  width: 100%;
  font-size: 1em;
  font-color: ${props => props.theme.colors.base};
  & > p:first-child{
    margin-top: 0;
  }
  & > p:last-child{
    margin-bottom: 0;
  }
}

@media only screen and (min-width: 412px) {
  position: relative;
  display: inline-block;
  background-color: white;
  padding: .25rem .5rem .75rem;
  margin: 0 .5rem;
  vertical-align: top
  max-width: 50vw;
  font-size: 1em;
  font-color: ${props => props.theme.colors.base};
  & > p:first-child{
    margin-top: 0;
  }
  & > p:last-child{
    margin-bottom: 0;
  }
}
`

const About = ({ data }) => {
  const person = data.contentfulPerson
  console.log(person)
  return (
    <div>
      <SEO />
      <Container>
        <Headshot src={person.image.sizes.src}/>
        <Bio dangerouslySetInnerHTML={{ __html: person.longBio.childMarkdownRemark.html }} />
      </Container>
    </div>
  )
}

export const query = graphql`
query aboutQuery {
  contentfulPerson(name: { eq: "Lassiter Gregg" }) {
      id
    	image {
        id
        title
    	  sizes(maxWidth: 900) {
          ...GatsbyContentfulSizes_withWebp_noBase64
    	  }
    	}
    	longBio {
        childMarkdownRemark {
          html
        }
    	}
	}
}
`

export default About

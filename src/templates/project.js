import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import ProjectInfo from '../components/ProjectInfo'
import ProjectMedia from '../components/ProjectMedia'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

const ProjectTemplate = ({ data }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    tags
  } = data.contentfulProject
  const projectNode = data.contentfulProject

  // Alternate View, if heroImage does not exists
  if (heroImage == null) {
    return (
      <div>
        <Helmet>
          <title>{`${title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO pagePath={slug} projectNode={projectNode} projectSEO />

        <Container>
          <ProjectInfo title={title} tags={tags} />
          <PageBody body={body} />
        </Container>
      </div>
    )
  }
  // Default View, if heroImage exists
  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} projectNode={projectNode} projectSEO />

      <Container>
        <ProjectInfo title={title} tags={tags} />
        <PageBody body={body} />
        <ProjectMedia media={heroImage} />
      </Container>
    </div>
  )
}

export const query = graphql`
query projectQuery($slug: String!) {
  contentfulProject(slug: { eq: $slug }) {
      id
    	publishDate
    	title
      slug
			tags {
				title
        id
        slug
			}
    	body {
			  childMarkdownRemark {
			    html
			  }
      }
      heroImage {
        title
        sizes(maxWidth: 1200, quality: 90) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      requirements	
      results
  }
}
`
// TODO: Figure out why contentful/graphql won't query Meta Description or Project Media

export default ProjectTemplate

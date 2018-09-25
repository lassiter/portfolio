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
    projectMedia,
    body,
    tags
  } = data.contentfulProject
  const projectNode = data.contentfulProject
  // Alternate View, if projectMedia does not exists
  if (projectMedia == null) {
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
  // Default View, if projectMedia exists
  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} projectNode={projectNode} projectSEO />

      <Container>
        <ProjectInfo title={title} tags={tags} />
        <PageBody body={body} />
        <ProjectMedia media={projectMedia} />
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
      requirements	
      results
      projectMedia {
        id
        title
        description
        sizes(maxWidth: 800, maxHeight: 525) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
    }
	}
}
`
// TODO: Figure out why contentful/graphql won't query Meta Description or Project Media

export default ProjectTemplate

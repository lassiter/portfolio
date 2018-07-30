import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

const PostTemplate = ({ data }) => {
  const {
    title,
    slug,
    id,
    projectMedia,
    body,
    tags
  } = data.contentfulPost
  const postNode = data.contentfulPost

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

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
	}
}
`
// TODO: Figure out why contentful/graphql won't query Meta Description or Project Media

export default PostTemplate

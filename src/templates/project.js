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
    tags,
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
      title
      id
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
    allContentfulProject(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
        }
        previous {
          slug
        }
        next {
          slug
        }
      }
    }
  }
`

export default PostTemplate

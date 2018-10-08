import React from 'react'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Card from '../components/Card'
import CardList from '../components/CardList'
import ProjectCardList from '../components/ProjectCardList'
import ProjectCard from '../components/ProjectCard'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import styled from 'styled-components'

const Title = styled.h1`
  
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 3em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2em;
  }
`

const TagTemplate = ({ data }) => {
  const { title, slug } = data.contentfulTag

  const posts = sortBy(data.contentfulTag.post, 'publishDate').reverse()
  const projects = sortBy(data.contentfulTag.project, 'publishDate').reverse()
  if (projects == null && posts != null) {
    return (
      <div>
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>

        <Container>
          <PageTitle small>Tag: &ldquo;{title}&rdquo;</PageTitle>

          <CardList>
            {posts.map(post => (
              <Card
                key={post.id}
                slug={`/posts/${post.slug}`}
                image={post.heroImage}
                title={post.title}
                date={post.publishDate}
                excerpt={post.body}
              />
            ))}
          </CardList>
        </Container>
      </div>
    )
  } else if (projects != null && posts == null) {
    return (
      <div>
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>

        <Container>
          <PageTitle small>Tag: &ldquo;{title}&rdquo;</PageTitle>

          <ProjectCardList>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                slug={`/projects/${project.slug}`}
                image={project.heroImage}
                title={project.title}
                subtitle={project.subtitle}
                date={project.publishDate}
                excerpt={project.body}
              />
            ))}
          </ProjectCardList>
        </Container>
      </div>
    )
  } else {
    return (
      <div>
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>

        <Container>
          <PageTitle small>Tag: &ldquo;{title}&rdquo;</PageTitle>
          <Title>Posts</Title>
          <CardList>
            {posts.map(post => (
              <Card
                key={post.id}
                slug={`/posts/${post.slug}`}
                image={post.heroImage}
                title={post.title}
                date={post.publishDate}
                excerpt={post.body}
              />
            ))}
          </CardList>
          <Title>Projects</Title>
          <ProjectCardList>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                slug={`/projects/${project.slug}`}
                image={project.heroImage}
                title={project.title}
                subtitle={project.subtitle}
                date={project.publishDate}
                excerpt={project.body}
              />
            ))}
          </ProjectCardList>
        </Container>
      </div>
    )
  }
}

export const query = graphql`
  query tagQuery($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage {
          title
          sizes(maxWidth: 1200) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 80)
          }
        }
      }
      project {
        feature
        id
        slug
        title
        subtitle
        publishDate(formatString: "MMMM YYYY")

        heroImage {
          title
          sizes(maxWidth: 1200) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 144)
          }
        }
      }
    }
  }
`

export default TagTemplate

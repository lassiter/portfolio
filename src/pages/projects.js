import React from 'react'
import ProjectCardList from '../components/ProjectCardList'
import ProjectCard from '../components/ProjectCard'
import Container from '../components/Container'
// import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Index = ({ data }) => {
  const projects = data.allContentfulProject.edges
  console.log(projects)
  return (
    <div>
      <SEO />
      <Container>
        <ProjectCardList>
          {projects.map(({ node: project }) => (
            <ProjectCard
              key={project.id}
              slug={project.slug}
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

export const query = graphql`
query projectIndexQuery {
    allContentfulProject(
      limit: 1000
      sort: { fields: [feature], order: DESC }
    ) {
      edges {
        node {
					feature
          id
          slug
          title
          subtitle
          publishDate(formatString: "MMMM YYYY")

          heroImage {
            title
            sizes(maxWidth: 800, maxHeight: 533) {
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
      }
    }
  }
`

export default Index

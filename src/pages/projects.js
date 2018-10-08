import React from 'react'
import ProjectCardList from '../components/ProjectCardList'
import ProjectCard from '../components/ProjectCard'
import Container from '../components/Container'
// import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Index = ({ data }) => {
  const projects = data.allContentfulProject.edges
  
  return (
    <div>
      <SEO />
      <Container>
        <ProjectCardList>
          {projects.map((project) => (
            <ProjectCard
              key={project.node.id}
              slug={project.node.slug}
              image={project.node.heroImage}
              title={project.node.title}
              subtitle={project.node.subtitle}
              date={project.node.publishDate}
              excerpt={project.node.body}
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
            sizes(maxWidth: 550, maxHeight: 350) {
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
  }
`

export default Index

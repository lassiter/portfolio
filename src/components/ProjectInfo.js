import React from 'react'
import styled from 'styled-components'
import TagList from '../components/TagList'
require('prismjs/themes/prism.css')

const Wrapper = styled.div`
`

const Title = styled.h1`
  display: inline-block;
  margin: 0 auto 2rem;
`
const ProjectTagList = styled(TagList)`
  ul {
    margin: 1em auto 1em auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    @media (max-width: ${props => props.theme.responsive.small}) {
      margin: 0 auto 0 auto;
    }
  }

  li {
    display: inline-block;
    margin: 0 0 2em;
    a {
      transition: 0.2s;
      background: ${props => props.theme.colors.tertiary};
      padding: 0.5em;
      border-radius: 2px;
      text-transform: capitalize;
      margin: 0 0.5em 0 0;
      text-decoration: none;
      color: ${props => props.theme.colors.base};
      border: 1px solid ${props => props.theme.colors.secondary};
      &:hover {
        background: ${props => props.theme.colors.secondary};
      }
    }
  }
`

const ProjectInfo = props => {
  return (
    <Wrapper>
    <Title>{props.title}</Title>
      <ProjectTagList tags={props.tags} />
    </Wrapper>
  )
}

export default ProjectInfo

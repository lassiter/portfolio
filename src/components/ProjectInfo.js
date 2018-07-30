import React from 'react'
import styled from 'styled-components'
import TagList from '../components/TagList'
require('prismjs/themes/prism.css')

const Wrapper = styled.div`
`

const Title = styled.div`
`
const Tag = styled.li`
  display: inline-block;
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
`

const ProjectInfo = props => {
  return (
    <Wrapper>
    <Title>{props.title}</Title>
      {props.tags && <TagList tags={props.tags} />}
    </Wrapper>
  )
}

export default ProjectInfo

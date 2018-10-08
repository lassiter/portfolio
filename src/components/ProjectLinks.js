import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const ProjectLinks = props => {
  return (
    <Wrapper>
      {props.previous && (
        <PreviousLink to={`/projects/${props.previous.slug}/`}>Prev Post</PreviousLink>
      )}
      {props.next && <NextLink to={`/projects/${props.next.slug}/`}>Next Post</NextLink>}
    </Wrapper>
  )
}

export default ProjectLinks

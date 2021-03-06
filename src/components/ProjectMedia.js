import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const List = styled.li`
  position: relative;
  min-height: 300px;
  list-style-type: none;
`
const MediaItem = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const ProjectMedia = props => {
  return (
    <List>
      <MediaItem 
        key={props.media.id}
        sizes ={ props.media.sizes }
        title = { props.media.title }
      />
    </List>
  )
}

export default ProjectMedia

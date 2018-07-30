import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  min-height: 300px;
`
const List = styled.li`
  position: relative;
  min-height: 300px;
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

const ProjectMedia = props => (
  <List>
    {console.log(props.media)}
    {props.media.map(media => (

    <MediaItem 
      key={media.id}
      sizes ={ media.sizes }
      title = { media.title }
    />
    ))}
  </List>
)

export default ProjectMedia

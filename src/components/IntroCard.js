import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const Bio = styled.p`
  position: relative;
  min-height: 300px;
`
const Headshot = styled(Img)`
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

const IntroCard = props => {
  console.log(props.shortBio)
  return (
    <Wrapper>
      <Headshot
        sizes={props.image.sizes}
      />
      <Bio dangerouslySetInnerHTML={{ __html: props.shortBio.childMarkdownRemark.html }}/>
    </Wrapper>
  )
}

export default IntroCard

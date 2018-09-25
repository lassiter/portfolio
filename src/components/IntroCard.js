import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
`
const Bio = styled.p`
@media only screen and (max-width: 411px) {
  position: relative;
  font-size: 1.5rem;
  font-color: ${props => props.theme.colors.base};
  font-weight: bold;
  }

@media only screen and (min-width: 412px) {
  position: relative;
  top: 400px;
  min-height: 300px;
  font-size: 60px;
  font-color: ${props => props.theme.colors.base};
  font-weight: bold;
  }
`

const IntroCard = props => {
  return (
    <Wrapper>
      <Bio dangerouslySetInnerHTML={{ __html: props.shortBio.childMarkdownRemark.html }} />
    </Wrapper>
  )
};

export default IntroCard
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
`
const Bio = styled.p`
  position: relative;
  top: 400px;
  min-height: 300px;
  font-size: 60px;
  font-color: ${props => props.theme.colors.base};
  font-weight: bold;
`

const IntroCard = props => {
  return (
    <Wrapper>
      <Bio dangerouslySetInnerHTML={{ __html: props.shortBio.childMarkdownRemark.html }} />
    </Wrapper>
  )
};

export default IntroCard
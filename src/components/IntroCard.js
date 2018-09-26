import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  margin-top: -3.5rem;
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
  min-height: 300px;
  font-size: 60px;
  font-color: ${props => props.theme.colors.base};
  font-weight: bold;
   & > p:first-child {
     margin-block-start: 0px
   }
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
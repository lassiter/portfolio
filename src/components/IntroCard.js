import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  margin-top: -3.5rem;
`
const Bio = styled.div`
  position: relative;
  & > p {
    color: ${props => props.theme.colors.base};
    font-weight: bold;
    @media only screen and (max-width: 411px) {
      font-size: 1.5rem;
      font-weight: bold;
      }

    @media only screen and (min-width: 412px) {
      min-height: 300px;
      font-size: 60px;
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
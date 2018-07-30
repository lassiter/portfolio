import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Wrapper = styled.div`
//  put style here
`

const Title = styled.div`
//  put style here
`

const ProjectInfo = props => {
  return (
    <Wrapper>
    <Title>{props.title}</Title>
    <Tag>{props.tags}</Tag>
    </Wrapper>
  )
}

export default ProjectInfo

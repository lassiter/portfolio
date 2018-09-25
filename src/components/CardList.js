import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
@media screen and (max-width: ${props => props.theme.responsive.small}) {
  & > li:margin: 1rem auto 1rem;
  & > li:first-child {
    margin: 0 auto 1rem;
  }
}
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList

import React from 'react'
import styled from 'styled-components'
import Copyright from '../components/Copyright'
import { Link } from 'react-router-dom';

const Wrapper = styled.footer`
  height: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto 0;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 1em 0 3.5em;
`

const Item = styled.li`
  display: inline-block;
  margin: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  p {
    font-weight: 600;
    color: ${props => props.theme.colors.base};
  } 
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <Copyright/>
      </Item>
      <Item>
        <Link to={'/colophon/'}>Colophon</Link>
      </Item>
    </List>
  </Wrapper>
)

export default Footer

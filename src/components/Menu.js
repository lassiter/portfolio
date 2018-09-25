import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
@media only screen and (max-width: 411px) {
    width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
      & > a {
        font-size: 2em;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
}
@media only screen and (min-width: 412px) {
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
      & > a {
        font-size: 60px;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
}
`

const activeLinkStyle = {
  color: `${props => props.theme.colors.tertiary}`
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              L/
            </Link>
          </li>
          <li>
            <Link to="/projects/" activeStyle={activeLinkStyle}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/posts/" activeStyle={activeLinkStyle}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              ABOUT
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Project = styled.li`
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: .5em 0 1em
  }
`

const StyledLink = styled(Link)`
  display: inline-flex;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  background: ${props => props.theme.colors.secondary};
  text-decoration: none;
  color: ${props => props.theme.colors.base};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    flex-direction: column;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`

const Date = styled.div`
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    display: container;
    position: static;
    margin: 0 1rem 1.5rem 1rem;
    color: gray;
    transform: translate(0%,-20px) rotate(0deg);
    height: 0;
    width: auto;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
  display: container;
  position: static;
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
  transform: translate(-53.5%,-265px) rotate(-90deg);
  height: 0px;
  width: auto;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  
`

const Image = styled(Img)`
  display: block;
`
const ImgWrapper = styled.div`
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    width: 100%;
  }
  width: 60vw;
`
const InfoWrapper = styled.div`
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: .5em 0 1em;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
  vertical-align: bottom;
`
const Subtitle = styled.h4`
  font-size: .75rem;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`
const TitleWrapper = styled.div``

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
  vertical-align: top;
`

const Card = props => {
  return (
    <Project>
      <StyledLink to={`/${props.slug}/`}>
        <ImgWrapper>
            <Date>{props.date}</Date>
            <Image sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
        </ImgWrapper>
        <InfoWrapper>
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: props.excerpt.childMarkdownRemark.excerpt,
            }}
          />
          <TitleWrapper>
            <Subtitle>{props.subtitle}</Subtitle>
            <Title>{props.title}</Title>
          </TitleWrapper>
        </InfoWrapper>
      </StyledLink>
    </Project>
  )
}

export default Card

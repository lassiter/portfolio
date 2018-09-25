import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const Box = styled.div`
  margin: 0 auto;
  padding: 3em 1.5em 2em;
  text-align: center;
`

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  margin: 0 0 1em 0;
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  margin: 0 0 3rem 0;
  line-height: 1.2;
`
const Img = styled.img`

  margin: 0 auto;
  height: 50%;
  width: 50%;

`

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Box>
      <Title>Error 404</Title>
      <Text>Sorry, that page can't be found</Text>
      <Img src={"https://media.giphy.com/media/Gpf8A8aX2uWAg/giphy.gif"}/>
      <p><a href="https://giphy.com/gifs/reactiongifs-Gpf8A8aX2uWAg">via GIPHY ft. Ace Ventura</a></p>
    </Box>
  </div>
)

export default NotFoundPage

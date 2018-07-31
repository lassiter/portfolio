import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

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
const Headshot = styled(Img)`
  opacity: 0.37;
  width: 100%;
  z-index: -1;

  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  min-height: 300px;
  max-height: 900px;
  min-width: 300px;
  max-width: 900px;
  height: auto;
  
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  position: fixed !important
  right: 9px;

`

class IntroCard extends React.Component {
  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.computeNewValue = this.computeNewValue.bind(this);
  }

  getWidth() {
    return window.innerWidth;
  }

  computeNewValue() {
    let navElem = document.getElementsByTagName('nav')[0]
    let paddingRight = window.getComputedStyle(navElem, null).getPropertyValue("padding-right");
    let marginRight = window.getComputedStyle(navElem, null).getPropertyValue("margin-right");
    return parseFloat(paddingRight, 10) + parseFloat(marginRight, 10)
  }
  makeAdjustment(adjustment){
    let imgClass = document.getElementsByClassName('gatsby-image-wrapper')[0]
    imgClass.setAttribute("style", `right: ${adjustment}px;`)
    console.log(`current adjustment: ${adjustment} in onResize`)
  }

  onResize() {

    if (this.getWidth() > 1200) {
      this.getWidth() - 1200
      let adjustment = this.computeNewValue()
      console.log(`current adjustment: ${adjustment} in onResize`)
      this.makeAdjustment(adjustment-15)
    }
    if (this.getWidth() <= 1200){
      let style = "right: 9px;"
      const elem = document.getElementsByClassName('gatsby-image-wrapper')[0]
      elem.setAttribute("style", style)
    }
  }

  onLoad() {
    console.log("domready")
    if (this.getWidth() >= 1200) {
      console.log(this.getWidth())
      let adjustment = this.computeNewValue()
      this.makeAdjustment(adjustment - 15)
    }
  }
  componentDidMount() {
    if (typeof window !== 'undefined')
      this.onLoad() // Makes sure that alignment is correct on inital load.
      window.addEventListener('resize', this.onResize, false)
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined')
      window.removeEventListener('resize', this.onResize)
  }

  render() {
    return (
    <Wrapper>
      <Headshot
        sizes={this.props.image.sizes}
      />
      <Bio dangerouslySetInnerHTML={{ __html: this.props.shortBio.childMarkdownRemark.html }}/>
    </Wrapper>
  )}
}


export default IntroCard


// opacity: 0.37;
// width: 100 %;
// z - index: -1;
// min - height: 300px;
// max - height: 900px;
// max - width: 900px;
// height: auto;
// object - position: right;
// margin - left: auto;
// @media(min - width: ${ props => props.theme.responsive.small }) {
//   height: ${ props => props.height || 'auto' };
// }
//   & > img {
//   object - fit: ${ props => props.fit || 'cover' } !important;
//   object - position: ${ props => props.position || '50% 50%' } !important;
// }
//   &:: before {
//   content: '';
//   background: rgba(0, 0, 0, 0.25);
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   height: 100 %;
//   width: 100 %;
//   z - index: 1;
// }

// position: absolute;
// top: 70 %;
// min - height: 300px;
// font - size: 60px;
// font - color: ${ props => props.theme.colors.base };
// font - weight: bold;
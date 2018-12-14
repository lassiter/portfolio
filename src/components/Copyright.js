import React from 'react'

class Copyright extends React.Component {


  render() {
    const dt = new Date();
    const currentYear = dt.getFullYear()
    
    if (currentYear === 2018) {
      return <p>© Lassiter Gregg, 2018</p>
    } else {
      return <p>{`© Lassiter Gregg, 2018-${currentYear}`}</p>
    }
  }
}

export default Copyright 
import React from 'react'

class Copyright extends React.Component {


  render() {
    const dt = new Date();
    const current_year = dt.getFullYear()
    
    if (current_year == "2018") {
      return <p>© Lassiter Gregg, 2018</p>
    } else {
      return <p>{`© Lassiter Gregg, 2018-${current_year}`}</p>
    }
  }
}

export default Copyright 
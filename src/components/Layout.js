import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const importedStyle = this.props.style
 
    const finalStyle = {
      ...importedStyle,
    }
    return (
      <div style={finalStyle}>
        <Navbar />
        <br />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout

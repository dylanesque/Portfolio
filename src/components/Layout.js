import React from 'react'

import { rhythm } from '../utils/typography'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const importedStyle = this.props.style
    const defaultStyle = {
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }

    const finalStyle = {
      ...defaultStyle,
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

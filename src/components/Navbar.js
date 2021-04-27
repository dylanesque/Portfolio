import React, { Component } from 'react'
import { Link } from 'gatsby'

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link to={'/'}>Home</Link>
          <Link to={'/portfolio'}>Portfolio</Link>
          <Link to={'/about'}>About Me</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/blog'}>Blog</Link>
        </div>
      </div>
    )
  }
}

export default Navbar

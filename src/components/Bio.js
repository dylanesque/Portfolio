import React from 'react'

// Import typefaces
import '@fontsource/lato'

import profilePic from './../assets/images/avatar.png'
import bioData from './../data/bio'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        <img
          src={profilePic}
          alt={`Sai Krishna`}
          style={{
            marginBottom: 0
          }}
        />
        <p>{bioData}</p>
      </div>
    )
  }
}

export default Bio

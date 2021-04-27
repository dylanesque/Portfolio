import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import { graphql } from 'gatsby'

import Layout from '../components/Layout'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Projects`}
        />
        <h2>Projects</h2>
      </Layout>
    )
  }
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

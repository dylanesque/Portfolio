module.exports = {
  siteMetadata: {
    title: 'Michael C Portfolio',
    author: 'Michael C',
    description: 'My Personal Website',
    siteUrl: 'https://placeholder.com',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-plugin-canonical-urls`,
            // or
            // resolve: `gatsby-plugin-react-helmet-canonical-urls`
            options: {
              // Change `siteUrl` to your domain
              siteUrl: `https://SITEURL.COM`,

              // Query string parameters are included by default.
              // Set `stripQueryString: true` if you don't want `/blog`
              // and `/blog?tag=foobar` to be indexed separately
              stripQueryString: true,
            },
          },
          {
            resolve: `gatsby-plugin-feed`,
            options: {
              query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
              feeds: [
                {
                  serialize: ({ query: { site, allMarkdownRemark } }) => {
                    return allMarkdownRemark.edges.map((edge) => {
                      return Object.assign({}, edge.node.frontmatter, {
                        description: edge.node.excerpt,
                        date: edge.node.frontmatter.date,
                        url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        custom_elements: [
                          { 'content:encoded': edge.node.html },
                        ],
                      })
                    })
                  },
                  query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
                  output: '/rss.xml',
                  title: "Your Site's RSS Feed",
                  // optional configuration to insert feed reference in pages:
                  // if `string` is used, it will be used to create RegExp and then test if pathname
                  // of current page satisfied this regular expression;
                  // if not provided or `undefined`, all pages will have feed reference inserted
                  match: '^/blog/',
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-minimal-portfolio-blog`,
        short_name: `gmpb`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}

import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Box } from 'rebass/styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../layouts/BaseLayout'
import SEO from '../components/SEO/SEO'

export default class MDXPage extends Component {
  render() {
    const post = this.props.data.page

    return (
      <Layout className="Page">
        <SEO key={`seo-${post.fields.slug}`} postData={post} isBlogPost />
        <Box mx="auto" as="article" id="Article">
          <MDXRenderer>{post.body}</MDXRenderer>
        </Box>
      </Layout>
    )
  }
}

export const query = graphql`
  query PagePostQuery($id: String!) {
    page: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        section
      }
      body
      fields {
        slug
      }
    }
  }
`

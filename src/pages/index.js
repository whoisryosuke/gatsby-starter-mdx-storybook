import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Box } from 'rebass/styled-components'

import Layout from '../layouts/BaseLayout'
import Link from '../components/Link/Link'
import ButtonOutline from '../components/Button/ButtonOutline'
import Masthead from '../components/Masthead/Masthead'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import BasicCard from '../components/Card/BasicCard'
import Newsletter from '../components/Newsletter/Newsletter'
import Featured from '../components/Featured/Featured'
import PostLoop from '../components/PostLoop/PostLoop'
import Contact from '../components/Contact/Contact'

export default class Frontpage extends Component {
  render() {
    let { data } = this.props
    const {
      blog,
    } = data

    return (
      <Layout className="Frontpage">
        <Masthead header="MDX + Storybook" subheader="The easy way to build Gatsby sites" />

        {/*------- Featured card -------*/}
        <SectionHeading heading="Latest blog posts" />
        <Featured>
          <BasicCard
            width={[1, 1, 2 / 3, 1 / 2, 1 / 3]}
            solid
            title={blog.edges[0].node.frontmatter.title}
            subheader={blog.edges[0].node.frontmatter.tags}
            description={blog.edges[0].node.excerpt}
            link={blog.edges[0].node.fields.slug}
          />
        </Featured>

        {/*------- Posts loop -------*/}
        <PostLoop type="blog" loop={blog.edges} skip={true} />
        <Box sx={{ borderBottom: '1px solid black' }} textAlign="right" p={3}>
          <Link to={'blog'}>
            <ButtonOutline>Browse blog archive</ButtonOutline>
          </Link>
        </Box>

        <Newsletter />

        <Contact />
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    blog: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { frontmatter: { section: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            section
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

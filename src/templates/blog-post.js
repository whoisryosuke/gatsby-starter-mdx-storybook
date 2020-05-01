import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Heading, Image, Flex, Box } from 'rebass/styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import nicetime from '../helpers/nicetime'

import kebabCase from 'lodash/kebabCase'
// import 'prismjs/themes/prism-okaidia.css';

import Layout from '../layouts/BaseLayout'
import ReadingProgress from '../components/ReadingProgress'
import SEO from '../components/SEO/SEO'
import Cover from '../components/Cover'
import Comments from '../components/Comments/Comments'
import PostLoop from '../components/PostLoop/PostLoop'
import ListItemGrid from '../components/List/ListItemGrid'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import Twitter from '../components/icons/Twitter'
import Tumblr from '../components/icons/Tumblr'
import ryosukeAvatar from '../assets/img/ryosuke-avatar-128.png'

export default class BlogPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      instagram: false,
      codepen: false,
    }
  }

  componentDidMount() {
    // Check for Instagram script
    if (
      window.instgrm ||
      document.getElementById('react-instagram-embed-script')
    ) {
      if (this.state.instagram == false) {
        window.instgrm.Embeds.process()
      }
    } else {
      // Create script element with Instagram embed JS lib
      const s = document.createElement('script')
      s.async = s.defer = true
      s.src = `//www.instagram.com/embed.js`
      s.id = 'react-instagram-embed-script'
      const body = document.body
      if (body) {
        body.appendChild(s)
      }

      // Run Instagram function to show embeds
      if (window.instgrm && this.state.instagram == false) {
        window.instgrm.Embeds.process()
      }

      // Set IG state to true so the process doesn't run again
      this.setState({
        instagram: true,
      })
    }

    // Add Codepen script to <body> if we detect a Codepen embed
    const codepen = document.getElementsByClassName('codepen')
    if (codepen.length > 0) {
      // Check if we've already embedded the script
      if (!document.getElementById('codepen-script') || !this.state.codepen) {
        // Create script element with Codepen embed JS lib
        const s = document.createElement('script')
        s.async = s.defer = true
        s.src = `//static.codepen.io/assets/embed/ei.js`
        s.id = 'codepen-script'
        const body = document.body
        if (body) {
          body.appendChild(s)
        }

        // Set state to true so the process doesn't run again
        this.setState({
          codepen: true,
        })
      }
    }
  }

  render() {
    const skip = false
    const post = this.props.data.blog
    let related
    this.props.data.relatedPosts
      ? (related = this.props.data.relatedPosts.edges)
      : (related = null)
    const currentDate = new Date()

    const tags = post.frontmatter.tags.map(tag => (
      <Heading
        width={[1 / 2, 1 / 3, 1 / 4]}
        p={3}
        key={tag}
        variant="subtitle"
        textAlign="center"
      >
        <Link to={'/tags/' + kebabCase(tag)}>#{tag}</Link>
      </Heading>
    ))

    let postDate = new Date(post.frontmatter.date)

    // Check if post has thumbnail
    let postImage
    if (post.frontmatter.cover_image !== null) {
      postImage = post.frontmatter.cover_image.publicURL

      if (post.frontmatter.cover_image.childImageSharp !== null) {
        postImage =
          post.frontmatter.cover_image.childImageSharp &&
          post.frontmatter.cover_image.childImageSharp.sizes &&
          post.frontmatter.cover_image.childImageSharp.sizes.src
      }
    }

    return (
      <Layout className="Blog">
        {/*----- Reading progress only on blog -----*/}
        {post.frontmatter.section === 'blog' && (
          <ReadingProgress targetEl="#Article" />
        )}
        <SEO
          key={`seo-${post.fields.slug}`}
          postImage={postImage}
          postData={post}
          isBlogPost
        />
        <Box
          maxWidth="text"
          mx="auto"
          px={[4, 4, 6]}
          py={[1, 2]}
          as="article"
          className={'ArticlePage ' + post.frontmatter.section}
          id="Article"
        >
          {/*----- Cover image only on blog -----*/}
          {post.frontmatter.section === 'blog' && (
            <Cover image={post.frontmatter.cover_image} />
          )}
          <section className="container">
            {/*----- Post content -----*/}
            <section className="content">
              <Heading variant="header" my={3}>
                {post.frontmatter.title}
              </Heading>

              <MDXRenderer>{post.body}</MDXRenderer>
            </section>
          </section>
        </Box>

        <SectionHeading
          emoji="🔗"
          heading="This post was filed under"
          sx={{ borderTop: '1px solid black' }}
        />
        <Flex
          width={1}
          p={3}
          sx={{ borderBottom: '1px solid black' }}
          flexWrap="wrap"
        >
          {tags}
        </Flex>

        {/*----- Author / Date meta data -----*/}
        <Flex p={3} className="meta" sx={{ borderBottom: '1px solid black' }}>
          <Image
            variant="avatar"
            src={ryosukeAvatar}
            alt="Blue square avatar white centered hiragana text reading Ryosuke"
          />
          <Heading p={3} variant="label">
            @Ryosuke
            <span className="date" style={{ marginLeft: '1em' }}>
              {nicetime(currentDate, postDate)}
            </span>
          </Heading>
        </Flex>

        {post.frontmatter.section === 'blog' && <Comments post={post} />}

        {related ? (
          <nav className="RelatedPosts">
            <SectionHeading emoji="📚" heading="Related posts" />
            <PostLoop loop={related} skip={skip} />
          </nav>
        ) : (
          ''
        )}
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($id: String!, $tag: String!) {
    blog: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        section
        cover_image
      }
      body
      fields {
        slug
      }
    }
    relatedPosts: allMdx(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { id: { ne: $id }, frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            cover_image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

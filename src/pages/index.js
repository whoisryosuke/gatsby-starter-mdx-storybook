import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Box, Flex, Heading } from 'rebass/styled-components'
import { ArrowRight } from 'react-feather'

import Layout from '../layouts/BaseLayout'
import Link from '../components/Link/Link'
import Masthead from '../components/Masthead/Masthead'
import CardGroup from '@components/Card/CardGroup'
import BasicCard from '../components/Card/BasicCard'
import ArticleCard from '../components/Card/ArticleCard'
import ImageCard from '../components/Card/ImageCard'
import EventCard from '../components/Card/EventCard'
import Segment from '@components/Segment/Segment'
import Table from '@components/Table/Table'
import ButtonLink from '@components/Button/ButtonLink'

import getVideoThumbnail from '@helpers/getVideoThumbnail'

export default class Frontpage extends Component {
  render() {
    let { data } = this.props
    const { articles, designSystems, videos, events } = data
    const firstVideo = videos.edges[0].node
    const restVideos = videos.edges.splice(0, 1)
    const videoThumbnail = getVideoThumbnail(
      firstVideo.platform,
      firstVideo.url
    )

    return (
      <Layout className="Frontpage">
        <Masthead
          header="All the design systems"
          subheader="and related articles, videos, podcasts, and events"
        />

        <Segment>
          <Heading as="h2" variant="h2">
            Design Systems
          </Heading>
          <CardGroup columns={4}>
            {designSystems.edges.map(({ node: { title, company, url } }) => (
              <BasicCard
                title={title}
                subtitle={company}
                href={url.website}
                reverse
              />
            ))}
          </CardGroup>
          <Box textAlign="right">
            <Link to="/design-systems">View all design systems</Link>
          </Box>
        </Segment>

        <Segment>
          <Heading as="h2" variant="h2">
            Articles
          </Heading>
          <CardGroup columns={3}>
            {articles.edges.map(
              ({ node: { title, url, description, author, date } }) => (
                <ArticleCard
                  title={title}
                  href={url}
                  subtitle={author}
                  description={description}
                  date={date}
                />
              )
            )}
          </CardGroup>
          <Box textAlign="right">
            <Link to="/articles">View all articles</Link>
          </Box>
        </Segment>

        <Segment>
          <Heading as="h2" variant="h2">
            Videos
          </Heading>
          <Flex>
            <ImageCard
              width={(1, 1 / 3)}
              title={videos.edges[0].node.title}
              href={videos.edges[0].node.url}
              subtitle={videos.edges[0].node.author}
              image={videoThumbnail}
              date={videos.edges[0].node.date}
            />
            <Box width={(1, 2 / 3)} ml={4}>
              <Table width={1}>
                <thead>
                  <tr>
                    <th>Video</th>
                    <th>Author</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {restVideos.map(
                    ({ node: { title, url, platform, author, date } }) => {
                      return (
                        <tr>
                          <td>
                            <a href={url}>{title}</a>
                          </td>
                          <td>{author}</td>
                          <td>{date}</td>
                        </tr>
                      )
                    }
                  )}
                </tbody>
              </Table>
            </Box>
          </Flex>
          <Box textAlign="right">
            <Link to="/videos">View all videos</Link>
          </Box>
        </Segment>

        <Segment>
          <Heading as="h2" variant="h2">
            Upcoming Events
          </Heading>
          <CardGroup columns={3}>
            {events.edges.map(({ node: { title, url, location, date } }) => {
              return (
                <EventCard title={title} href={url} date={date} {...location} />
              )
            })}
          </CardGroup>
          <Box textAlign="right">
            <Link to="/events">View all events</Link>
          </Box>
        </Segment>

        <Flex p={5} alignItems="center">
          <Box width={1 / 2} p={3} textAlign="right">
            <Heading as="h2" variant="h2">
              Looking to submit content?
            </Heading>
          </Box>
          <Box width={1 / 2} p={2}>
            <ButtonLink to="/" icon={ArrowRight}>
              Check out our guide
            </ButtonLink>
          </Box>
        </Flex>
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    articles: allArticlesJson(sort: { fields: [date], order: DESC }, limit: 3) {
      edges {
        node {
          title
          url
          description
          author
          date
        }
      }
    }
    designSystems: allDesignSystemsJson(
      sort: { fields: [title], order: DESC }
      limit: 8
    ) {
      edges {
        node {
          title
          company
          url {
            website
          }
        }
      }
    }
    videos: allVideosJson(sort: { fields: [date], order: DESC }, limit: 5) {
      edges {
        node {
          date
          title
          url
          platform
          author
        }
      }
    }
    events: allEventsJson(sort: { fields: [date], order: DESC }, limit: 3) {
      edges {
        node {
          title
          url
          date
          location {
            city
            country
            state
          }
        }
      }
    }
  }
`

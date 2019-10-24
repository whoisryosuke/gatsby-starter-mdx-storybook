import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex, Text, Heading, Image } from 'rebass/styled-components'

import Layout from '../layouts/BaseLayout'
import SEO from '@components/SEO/SEO';
import Newsletter from '../components/Newsletter/Newsletter'
import Contact from '../components/Contact/Contact'

import BombEmoji from '../assets/img/emoji/bomb.png'

const Highlight = styled.span`
  color: ${props => props.theme.colors.primary};
`

export default class Frontpage extends Component {

  render() {

    return (
      <Layout className="About pt2">
        <SEO
          key="seo-about"
          title="About"
          url="about"
        />
        <Box px={3} py={5} sx={{ borderBottom: '1px solid black' }}>
          <Heading fontSize={[1, 2, 3]}>
            Ryosuke meaning <Highlight>clear</Highlight> mediation.
          </Heading>
          <Heading fontSize={[4, 5, 6]}>
            The artist formerly known as <Highlight>Oscar</Highlight>{' '}
            <Image src={BombEmoji} alt="Bomb emoji" width="40px" />
          </Heading>
        </Box>

        <Newsletter />

        <Contact />
      </Layout>
    )
  }
}

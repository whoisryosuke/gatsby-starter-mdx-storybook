import React from 'react';
import { Box, Flex } from 'rebass/styled-components'
import CardGroup from './CardGroup'
import ArticleCard from './ArticleCard'
import BasicCard from "./BasicCard"
import EventCard from "./EventCard"
import ImageCard from "./ImageCard"

export default { title: 'Card' };

// Dummy data
const title = 'Getting started developing Shopify themes'
const subtitle = 'Getting Started'
const description =
  "Shopify has exploded over the past few years, becoming a near de-facto decision for any small to mid scale e-commerce project. It's become more important than ever to sharpen Shopify skills and get a handle on Liquid."
const date = "April 20, 2020"
const imageUrl = "http://i3.ytimg.com/vi/r7X9wbeqEtU/maxresdefault.jpg"

// 3 cards in array for group
const items = Array.from('x'.repeat(3)).map(() => <ArticleCard
                 title={title}
                 subtitle={subtitle}
                 description={description}
                 date={date}
               />)

export const basic = () => (
             <BasicCard
               title={title}
               subtitle={subtitle}
             />
)
export const group = () => (
         <CardGroup columns={3}>{items}</CardGroup>
)
export const designSystem = () => (
  <BasicCard
    title={title}
    subtitle={subtitle}
    reverse
  />
)
export const article = () => (
         <ArticleCard
           title={title}
           subtitle={subtitle}
           description={description}
           date={date}
           link={'/test'}
         />
       )
export const event = () => (
         <EventCard
           title="Design Systems Conf 2020"
           subtitle="San Francisco, CA"
           date={date}
           link={'/test'}
         />
       )
export const image = () => <ImageCard title="Managing Colors in a Design System" subtitle="Marcin Treder" date="Dec 13, 2019" image={imageUrl} />
export const imageGrid = () => <CardGroup columns={3}>
  <ImageCard title="Managing Colors in a Design System" subtitle="Marcin Treder" date="Dec 13, 2019" image={imageUrl} />
  <ImageCard title="Managing Colors in a Design System" subtitle="Marcin Treder" date="Dec 13, 2019" image={imageUrl} />
  <ImageCard title="Managing Colors in a Design System" subtitle="Marcin Treder" date="Dec 13, 2019" image={imageUrl} />
</CardGroup>
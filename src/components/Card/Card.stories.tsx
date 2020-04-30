import React from 'react';
import { Box, Flex } from 'rebass/styled-components'
import CardGroup from './CardGroup'
import BasicCard from "./BasicCard"
import ProjectCard from "./ProjectCard"
import ImageCard from "./ImageCard"

export default { title: 'Card' };

const title = 'Getting started developing Shopify themes'
const subheader = 'Getting Started'
const description =
  "Shopify has exploded over the past few years, becoming a near de-facto decision for any small to mid scale e-commerce project. It's become more important than ever to sharpen Shopify skills and get a handle on Liquid."
const items = Array.from('x'.repeat(3)).map(() => <BasicCard
                 title={title}
                 subheader={subheader}
                 description={description}
               />)

export const basic = () => (
             <BasicCard
               title={title}
               subheader={subheader}
               description={description}
             />
)
export const group = () => (
         <CardGroup items={items} columns={3} />
       )
export const project = () => <ProjectCard title="Kushy API Documentation" subheader="UI / UX" href="/kushy-api-documentation" />
export const image = () => <ImageCard title="Kushy API Documentation" subheader="UI / UX" />
export const imageGrid = () => <Flex flexWrap="wrap">
  <ImageCard title="Kushy API Documentation" subheader="UI / UX" width={[1, 1/2]} />
  <ImageCard title="Kushy API Documentation" subheader="UI / UX" width={[1, 1/2]} />
  <ImageCard title="Kushy API Documentation" subheader="UI / UX" width={[1, 1/2]} />
  <ImageCard title="Kushy API Documentation" subheader="UI / UX" width={[1, 1/2]} />
  </Flex>
import * as React from 'react'
import { Box, Flex, Heading, Text } from 'rebass/styled-components'
import BaseCard from './BaseCard'

interface IBasicCardProps {
  title: string
  subtitle: string
  description: string
  link: string
  reverse: boolean
}

const BasicCard: React.FunctionComponent<IBasicCardProps> = ({
  title,
  subtitle,
  link,
  reverse,
  ...props
}) => {
  // Check if subtitle is array or string
  // return one item if array
  let subtitle = subtitle
  if (Array.isArray(subtitle) && subtitle.length > 0) {
    subtitle = subtitle[Math.floor(Math.random() * subtitle.length)]
  }
  
  // Place content into array
  // Lets us "reverse" the text placement
  const content = [
    <Heading variant="label">
      {subtitle}
    </Heading>,
    <Heading variant="h2">
      {title}
    </Heading>
  ]
  if(reverse) content.reverse();

  return (
    <BaseCard link={link} {...props}>
      <Box p={4} sx={{ "& *:first-child": { marginBottom: 3} }}>
          {content}
      </Box>
    </BaseCard>
  )
}

export default BasicCard

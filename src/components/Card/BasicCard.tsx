import * as React from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components'
import BaseCard from "./BaseCard"

interface IBasicCardProps {
  title: string,
  subheader: string,
  description: string,
  link: string
}

const BasicCard: React.FunctionComponent<IBasicCardProps> = ({title, subheader, description, link, ...props}) => {
  // Check if Subheader is array or string
  // return one item if array
  let subtitle = subheader
  if (Array.isArray(subheader) && subheader.length > 0) {
    subtitle = subheader[Math.floor(Math.random() * subheader.length)]
  }
  return (
    <BaseCard link={link} {...props}>
      <Box p={4}>
        <Heading variant="label" mb="3">
          {subtitle}
        </Heading>
        <Heading variant="h2" mb="3">
          {title}
        </Heading>
        <Text variant="paragraph" mb={2} color="gray.dark">
          {description}
        </Text>
      </Box>
      <Flex p={4} justifyContent="space-between" sx={{borderTop:"1px solid", borderColor: "gray.light"}}>
        <Text variant="small">April 20, 2019</Text>
        <Box>Icon</Box>
      </Flex>
    </BaseCard>
  )
};

export default BasicCard;

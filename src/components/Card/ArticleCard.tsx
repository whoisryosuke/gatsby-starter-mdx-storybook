import * as React from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components'
import { ChevronsRight } from 'react-feather'
import BaseCard from "./BaseCard"

interface IArticleCardProps {
  title: string
  subtitle: string
  description: string
  date: string
  link: string
}

const ArticleCard: React.FunctionComponent<IArticleCardProps> = ({title, subtitle, description, date, link, ...props}) => {
  // Check if subtitle is array or string
  // return one item if array
  let subtitleSelection = subtitle
  if (Array.isArray(subtitle) && subtitle.length > 0) {
    subtitleSelection = subtitle[Math.floor(Math.random() * subtitle.length)]
  }
  return (
    <BaseCard link={link} {...props}>
      <Box p={4}>
        <Heading variant="label" mb="3">
          {subtitleSelection}
        </Heading>
        <Heading variant="h2" mb="3">
          {title}
        </Heading>
        <Text variant="paragraph" mb={2} color="gray.dark">
          {description}
        </Text>
      </Box>
      <Flex
        p={4}
        justifyContent="space-between"
        sx={{ borderTop: '1px solid', borderColor: 'gray.light' }}
      >
        <Text variant="small">{date}</Text>
        <Box>
          <ChevronsRight color="#5B5B5B" />
        </Box>
      </Flex>
    </BaseCard>
  )
};

export default ArticleCard;

import * as React from 'react';
import { Box, Flex, Heading, Image, Text } from 'rebass/styled-components'
import { Play } from 'react-feather'
import BaseCard from "./BaseCard"

interface ImageCardProps {
  title: string
  subtitle: string
  date: string
  image: string
}

const ImageCard: React.FunctionComponent<ImageCardProps> = ({ title, subtitle, date, image, ...props}) => {
  return(
    <BaseCard {...props}>
      <Image src={image} alt={`Thumbnail for ${title}`} />
      <Box p={4}>
        <Heading variant="label" mb="3">
          {subtitle}
        </Heading>
        <Heading variant="h2" mb="3">
          {title}
        </Heading>
      </Box>
      <Flex
        p={4}
        justifyContent="space-between"
        sx={{ borderTop: '1px solid', borderColor: 'gray.light' }}
      >
        <Text variant="small">{date}</Text>
        <Box>
          <Play color="#5B5B5B" />
        </Box>
      </Flex>
    </BaseCard>
  )
};

export default ImageCard;

import * as React from 'react';
import { Box, Button, Flex, Heading } from 'rebass/styled-components'

interface IMastheadProps {
  header: string
  subheader: string
}

const Masthead: React.FunctionComponent<IMastheadProps> = ({header, subheader}) => {
  return (
    <Box as="section" px={4} py={6} textAlign="center">
      <Heading fontSize={[5, 6, 7]} mb={3}>{header}</Heading>
      <Heading fontSize={[1, 2, 3]} fontWeight="normal" mb={4}>{subheader}</Heading>
      <Flex justifyContent="center" mb={3}>
        <Button variant="masthead" mr={3}>Browse systems</Button>
        <Button variant="masthead" color="black" bg="white">Start learning</Button>
      </Flex>
    </Box>
  )
};

export default Masthead

import React from 'react';
import { Flex, Box, Button, Heading, Text } from 'rebass/styled-components'
import ButtonOutline from "./ButtonOutline"

export default { title: 'Button' };

export const outline = () => <ButtonOutline>Submit</ButtonOutline>
export const primary = () => <Button variant="primary">Submit</Button>
export const white = () => (
  <Button variant="white">
    Submit
  </Button>
)
export const masthead = () => <Button variant="masthead">Submit</Button>
export const whiteMasthead = () => <Button variant="masthead" bg="white" color="black">Submit</Button>
export const inline = () => <Flex>
  <Box
    as="a"
    width={[1 / 2]}
    href={`http://twitter.com/share`}
  >
    <ButtonOutline width={1} sx={{ borderRight: 0 }}>
      Discuss on Twitter
        </ButtonOutline>
  </Box>
  <Box
    as="a"
    width={[1 / 2]}
    href={`http://www.tumblr.com/share/link?url=http://whoisryosuke.com`}
  >
    <ButtonOutline width={1}>Discuss on Tumblr</ButtonOutline>
  </Box>
</Flex>
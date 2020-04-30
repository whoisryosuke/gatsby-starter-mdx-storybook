import * as React from 'react';
import { Box, Heading } from 'rebass/styled-components'

interface IMastheadProps {
  header: string
  subheader: string
}

const Masthead: React.FunctionComponent<IMastheadProps> = ({header, subheader}) => {
  return (
    <Box as="section" p={4} textAlign="center">
      <Heading fontSize={[5, 6, 7]}>{header}</Heading>
      <Heading fontSize={[1, 2, 3]}>{subheader}</Heading>
    </Box>
  )
};

export default Masthead

import React from 'react'
import {Box, Heading, Flex, Image, Text} from 'rebass/styled-components'
import { GitHub, Twitter } from "react-feather"
import Link from "../Link/Link"
import Dropdown from "../Dropdown/Dropdown"

const List = ({ children }) => <Box as="ul" width={[1 / 2, 1 / 4]} sx={{
  padding:0,
  listStyleType: "none"
}}>{children}</Box>
const ListHeading = ({ children }) => <li>
  <Heading as="h5" mb={3} sx={{ fontSize: 2 }}>{children}</Heading>
</li>
const ListItem = ({ children, to }) => <li><Link to={to} secondary><Text color="gray.dark" fontWeight="normal" mb={3}>{children}</Text></Link></li>

interface Props {
  
}

export const Footer: React.FC<Props> = () => {
  return (
    <Box as="footer" bg="background" p={5}>
      <Flex flexWrap="wrap" mb={5}>
        <List>
          <ListHeading>Guides</ListHeading>
          <ListItem to="#">What is a design system?</ListItem>
          <ListItem to="#">What is a design system?</ListItem>
          <ListItem to="#">What is a design system?</ListItem>
        </List>

        <List>
          <ListHeading>Guides</ListHeading>
          <ListItem to="#">What is a design system?</ListItem>
          <ListItem to="#">What is a design system?</ListItem>
          <ListItem to="#">What is a design system?</ListItem>
        </List>

        <List>
          <ListHeading>Guides</ListHeading>
          <ListItem to="#">What is a design system?</ListItem>
          <ListItem to="#">What is a design system?</ListItem>
          <ListItem to="#">What is a design system?</ListItem>
        </List>

        <List>
          <ListHeading>Guides</ListHeading>
          <ListItem to="#">What is a design system?</ListItem>
          <ListItem to="#">What is a design system?</ListItem>
          <ListItem to="#">What is a design system?</ListItem>
        </List>

      </Flex>
      <Flex alignItems="center">
        <Box sx={{"& svg": { color: "#6a6a6a", "&:hover": {color:"primary"} }, "& a": { marginRight: 3}}}>
          <a href="#"><GitHub /></a>
          <a href="#"><Twitter /></a>
        </Box>
        <Flex minWidth="15em" ml={4} alignItems="center">
          <Text variant="label" mr={4}>Theme:</Text>
          <Box width={1}>
            <Dropdown>
              <option>Light</option>
              <option>Dark</option>
            </Dropdown>
          </Box>
        </Flex>
        <Text variant="paragraph" fontSize={0} color="gray.dark" fontStyle="italic" ml={4} mb={0}>
          Last updated 4/20/2020
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
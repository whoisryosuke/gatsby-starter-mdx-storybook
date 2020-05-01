import React from 'react'
import Link from "gatsby-link"
import {Box, Flex} from 'rebass/styled-components'

interface Props {
  children: React.node[]
  icon: JSX.Element
  reverse: boolean
  to: string
  href: string
}

export const ButtonLink: React.FC<Props> = ({to, href, children, icon: Icon, reverse, ...props}) => {
    const LinkComponent = to ? Link : 'a';
    let content = children
    if (Icon) {
        content = <Flex><Box mr={5}>{children}</Box><Icon /></Flex>

        if (reverse) content = <Flex><Icon /><Box ml={3}>{children}</Box></Flex>
    }
  return (
        <Box
            as={LinkComponent}
            to={to} 
            href={href}
            variant="buttons.primary"
            sx={{
                display:'inline-block'
            }}
            {...props}
        >
          {content}
        </Box>
  )
}

export default ButtonLink
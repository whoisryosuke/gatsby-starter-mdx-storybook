import * as React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'

const StyledLink = styled(Link)`
    text-decoration:none;
    color:${(props) => props.theme.colors.black};
    border-bottom:0;

    &:hover {
      color:${(props) => props.theme.colors.black};
    }
`

interface BaseCardProps {
  children: JSX.Element
}

const BaseCard: React.FunctionComponent<BaseCardProps> = ({children, link, href, ...props}) => {
  const LinkComponent = link ? Link : 'a';
  if(link || href) {
    return(
      <Box variant="card" {...props}>
        <StyledLink as={LinkComponent} to={link} href={href}>
          {children}
        </StyledLink>
      </Box>
    )
  }
  return(
    <Box variant="card" {...props}>
      {children}
    </Box>
  )
};

export default BaseCard;

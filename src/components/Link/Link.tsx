import * as React from 'react'
import GLink from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(GLink)`
  font-family: ${({theme}) => theme.fonts.body};
  color:${({theme}) => theme.colors.primary};
  font-weight:bold;
  border-bottom:1px;
  text-decoration:none;

  ${props => props.secondary && `
    color:${props.theme.colors.black};
  `}
`

interface Props {
  children: React.JSXElement
  to: string
  secondary?: boolean
}

export const Link: React.FC<Props> = ({ children, secondary, to}) => {
  
  return (
    <StyledLink to={to} secondary>
      {children}
    </StyledLink>
  )
}

export default Link
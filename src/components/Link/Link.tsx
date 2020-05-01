import * as React from 'react'
import GLink from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(GLink)`
  font-family: ${({theme}) => theme.fonts.body};
  color:${({theme}) => theme.colors.primary};
  font-weight:bold;
  border-bottom:1px;
  text-decoration:none;

  & :hover {
    color: ${({theme}) => theme.colors.black};
  }

  ${props => props.secondary && `
    color:${props.theme.colors.black};

    & :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  `}
`

interface Props {
  children: React.ReactNode
  to: string
  secondary?: boolean
}

export const Link: React.FC<Props> = ({ children, secondary, to}) => {
  
  return (
    <StyledLink to={to} secondary={secondary}>
      {children}
    </StyledLink>
  )
}

export default Link
import * as React from 'react';
import styled from "styled-components"
import { Box, Heading } from 'rebass/styled-components'

interface ISectionHeadingProps {
  className: string,
  emoji: string,
  heading: string,
  subtitle?: string
}

const SectionHeading: React.FunctionComponent<ISectionHeadingProps> = ({className, emoji, heading, subtitle, ...props}) => {
  return(
  <Box className={className} {...props}>
    <Heading variant="heading">{emoji && emoji} {heading}</Heading>
    {subtitle && <Heading variant="subtitle" mt={2} pl={4} mb={0}>{subtitle}</Heading>}
  </Box>
  )
};


const StyledSectionHeading = styled(SectionHeading)`
  padding:2rem 1rem;
  border-bottom:1px solid ${(props) => props.theme.colors.black};

  ${props => props.tall && `
    padding-top:7rem;
  `}
`

export default StyledSectionHeading;

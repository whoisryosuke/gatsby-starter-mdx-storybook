import * as React from 'react';
import styled from 'styled-components'
import Link from "gatsby-link";
import { Heading, Text } from 'rebass/styled-components'
import BaseCard from "./BaseCard"

const StyledLink = styled(Link)`
  text-decoration:none;
  color:${(props) => props.theme.colors.black};
`

interface IProjectCardProps {
  title: string,
  subtitle: string,
  description: string
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({ title, subtitle, link, ...props }) => {
  // Check if subtitle is array or string
  // return one item if array
  let subtitleSelected = subtitle
  if (Array.isArray(subtitle) && subtitle.length > 0) {
    subtitleSelected = subtitle[Math.floor(Math.random() * subtitle.length)]
  }
  return(
    <BaseCard link={link} {...props}>
      <Heading variant="h2" mt="5" mb="2">{title}</Heading>
      <Heading variant="label" mb="4">{subtitleSelected}</Heading>
    </BaseCard>
  )
};

export default ProjectCard;

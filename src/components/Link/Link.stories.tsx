import React from 'react';
import Link from "./Link"
import { Button, Heading, Text } from 'rebass/styled-components'
import ButtonOutline from "../Button/ButtonOutline"

export default { title: 'Link' };

export const basic = () => <Link to="/blog">Go to blog</Link>
export const secondary = () => <Link to="/blog" secondary>Go to blog</Link>
export const styledText = () => <Link to="/blog" secondary><Text variant="label">Go to blog</Text></Link>
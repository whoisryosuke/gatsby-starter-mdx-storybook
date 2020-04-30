import * as React from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components'
import { Calendar } from 'react-feather'
import BaseCard from "./BaseCard"

interface IEventCardProps {
    title: string
    subheader: string
    description: string
    date: string
    link: string
}

const EventCard: React.FunctionComponent<IEventCardProps> = ({ title, subheader, date, link, ...props }) => {
    // Check if Subheader is array or string
    // return one item if array
    let subtitle = subheader
    if (Array.isArray(subheader) && subheader.length > 0) {
        subtitle = subheader[Math.floor(Math.random() * subheader.length)]
    }
    return (
        <BaseCard link={link} {...props}>
            <Box p={4}>
                <Heading variant="h2" mb="3">
                    {title}
                </Heading>
                <Heading variant="label" mb="3">
                    {subtitle}
                </Heading>
            </Box>
            <Flex
                p={4}
                justifyContent="space-between"
                sx={{ borderTop: '1px solid', borderColor: 'gray.light' }}
            >
                <Text variant="small">{date}</Text>
                <Box>
                    <Calendar color="#5B5B5B" />
                </Box>
            </Flex>
        </BaseCard>
    )
};

export default EventCard;

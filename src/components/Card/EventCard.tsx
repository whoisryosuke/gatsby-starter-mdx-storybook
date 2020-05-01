import * as React from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components'
import { Calendar } from 'react-feather'
import BaseCard from "./BaseCard"

interface EventCardProps {
    title: string
    subtitle: string
    description: string
    date: string
    link: string
}

const EventCard: React.FunctionComponent<EventCardProps> = ({ title, subtitle, date, link, ...props }) => {
    // Check if subtitle is array or string
    // return one item if array
    let subtitleSelected = subtitle
    if (Array.isArray(subtitle) && subtitle.length > 0) {
        subtitleSelected = subtitle[Math.floor(Math.random() * subtitle.length)]
    }
    return (
        <BaseCard link={link} {...props}>
            <Box p={4}>
                <Heading variant="h2" mb="3">
                    {title}
                </Heading>
                <Heading variant="label" mb="3">
                    {subtitleSelected}
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

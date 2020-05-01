import * as React from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components'
import { Calendar } from 'react-feather'
import BaseCard from "./BaseCard"

interface EventCardProps {
    title: string
    city: string
    state: string
    country: string
    date: string
    href: string
}

const EventCard: React.FunctionComponent<EventCardProps> = ({ title, date, href, city, state, country, ...props }) => {
    // Add to array to filter out empty values and comma separate
    const location = [city, state, country]
    const locationParsed = location.filter(el => el != null).join(", ")
    
    return (
        <BaseCard href={href} {...props}>
            <Box p={4}>
                <Heading variant="h2" mb="3">
                    {title}
                </Heading>
                <Heading variant="label" mb="3">
                    {locationParsed}
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

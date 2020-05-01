import React from 'react'
import { Box } from 'rebass/styled-components'

interface Props {
    children: React.ReactNode
}

export const Segment: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Box
            bg="background"
            px={3}
            py={4}
            {...props}
        >
            {children}
        </Box>
    )
}

export default Segment
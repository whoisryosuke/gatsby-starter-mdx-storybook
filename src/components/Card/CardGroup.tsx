import * as React from 'react'
import { Box, Flex } from 'rebass/styled-components'

interface ICardGroupProps {
  items: [JSX.Element]
  columns: Number
}

const CardGroup: React.FunctionComponent<ICardGroupProps> = ({
  items,
  columns = 2,
  ...props
}) => {
    const desktopWidth = 1 / columns
  return (
    <Flex flexWrap="wrap" {...props}>
      {items.map((item) => (
        <Box width={[1, desktopWidth]} p={3}>
          {item}
        </Box>
      ))}
    </Flex>
  )
}

export default CardGroup

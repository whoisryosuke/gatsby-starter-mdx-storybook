import * as React from 'react'
import { Box, Flex } from 'rebass/styled-components'

interface ICardGroupProps {
  children: JSX.Element
  columns: number
}

const CardGroup: React.FunctionComponent<ICardGroupProps> = ({
  children,
  columns = 2,
  ...props
}) => {
    const desktopWidth = 1 / columns
  const renderChildren = React.Children.map(children, (child) => <Box width={[1, desktopWidth]} p={3}>{child}</Box>)
  return (
    <Flex flexWrap="wrap" {...props}>
      {renderChildren}
    </Flex>
  )
}

export default CardGroup

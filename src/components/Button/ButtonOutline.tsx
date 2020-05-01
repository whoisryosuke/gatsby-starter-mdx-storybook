import React from 'react'
import {Button} from 'rebass/styled-components'

interface Props {
  children: React.node[]
}

export const ButtonOutline: React.FC<Props> = ({children, ...props}) => {
  return (
    <Button
      variant="outline"
      sx={{
        transition: 'background 400ms ease-in',
        '&:hover': { backgroundColor: 'gray.light' },
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ButtonOutline
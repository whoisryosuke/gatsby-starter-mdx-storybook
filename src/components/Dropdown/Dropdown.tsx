import React from 'react'
import {Select} from '@rebass/forms'

interface Props {
  children: React.node[]
}

export const Dropdown: React.FC<Props> = ({children, ...props}) => {
  return (
    <Select
      sx={{
        borderColor: '#E9E9E9',
      }}
      {...props}
    >
      {children}
    </Select>
  )
}

export default Dropdown
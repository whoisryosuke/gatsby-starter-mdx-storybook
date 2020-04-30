import React from 'react';
import { Flex, Box } from 'rebass/styled-components'
import Dropdown from './Dropdown'

export default { title: 'Dropdown' };

export const outline = () => (
         <Dropdown>
           <option>Light</option>
           <option>Dark</option>
         </Dropdown>
       )
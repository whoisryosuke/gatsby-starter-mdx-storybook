import React from 'react';
import { Button, Heading, Text } from 'rebass/styled-components'
import Table from "./Table"

export default { title: 'Table' };

export const outline = () => <Table>
    <thead>
        <tr>
            <th>Video</th>
            <th>Author</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">Managing Colors in a Design System</a></td>
            <td>Marcin Treder</td>
            <td>Dec 13, 2019</td>
        </tr>
        <tr>
            <td><a href="#">Managing Colors in a Design System</a></td>
            <td>Marcin Treder</td>
            <td>Dec 13, 2019</td>
        </tr>
        <tr>
            <td><a href="#">Managing Colors in a Design System</a></td>
            <td>Marcin Treder</td>
            <td>Dec 13, 2019</td>
        </tr>
    </tbody>
</Table>
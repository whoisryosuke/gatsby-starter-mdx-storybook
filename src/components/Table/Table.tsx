import * as React from 'react';
import { Box } from 'rebass/styled-components'

interface TableProps {
    children: JSX.Element
}

const Table: React.FunctionComponent<TableProps> = ({ children, ...props }) => {
    return (
        <Box as="table" sx={{
            borderRadius: 'default',
            background: 'white',
            boxShadow: 'default',
            // Needed for table borders
            borderCollapse: "collapse",
            "& tr": {
                borderBottom: "1px solid",
                borderColor: "gray.border"
            },
            "& tbody tr:last-child": {
                borderBottom: 0
            },
            "& th": {
                color: "#5B5B5B",
                textTransform: "uppercase",
                fontSize: 0,
                fontWeight: "bold",
                letterSpacing: "1px",
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop:4,
                paddingBottom:3,
                textAlign: "left",
            },

            "& td": {
                fontSize: 0,
                color: "#5B5B5B",
                textTransform: "uppercase",
                padding: 4,
            },
            "& td a": {
                fontSize: 2,
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
                textTransform: "none",
            },
        }} {...props}>
            {children}
        </Box>
    )
};

export default Table;

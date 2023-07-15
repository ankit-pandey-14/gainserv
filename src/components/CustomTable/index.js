import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';


const CustomTable = ({ dataSource, columns }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((col) => (
                                    <TableCell key={col.key}>
                                        { col.title }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            dataSource.map((row) => (
                                <TableRow key={row.id}>
                                    {
                                        columns.map((col) => (
                                            <TableCell
                                                key={col?.key}
                                                component="th"
                                                scope="row"
                                            >
                                                {col?.render ? col.render(row, row[col?.dataIndex]) : row[col?.dataIndex]}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default CustomTable;
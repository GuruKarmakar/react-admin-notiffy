import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { EditOutlined, UploadOutlined, DeleteOutlined } from '@ant-design/icons';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#E7ECF4',
        color: '#394B79'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function createData(name, category, lang, status, update) {
    return { name, category, lang, status, update };
}

const rows = [
    createData('birthday_wishes', 'Marketing', 'English / Welcome and congratulations!! We provide', 'approved', '07/07/2022'),
    createData('birthday_wishes', 'Marketing', 'English / Welcome and congratulations!! We provide', 'not-submited', '07/07/2022')
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Template Name</StyledTableCell>
                        <StyledTableCell align="center">Template Category</StyledTableCell>
                        <StyledTableCell align="center">Language / Template</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Last Updated</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.category}</StyledTableCell>
                            <StyledTableCell align="center">{row.lang}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Chip label={row.status} color={row.status == 'approved' ? 'success' : 'primary'} />
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.update}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Stack direction="row" justifyContent="center" alignItems="center" spacing={-1}>
                                    <IconButton aria-label="fingerprint" color="secondary">
                                        <div style={{ backgroundColor: '#E9E9E9', borderRadius: 6, width: 150 }}>
                                            <img
                                                style={{ padding: 8, height: 30 }}
                                                src={require('../../assets/images/icons/edit.png')}
                                                alt=""
                                            />
                                        </div>
                                    </IconButton>
                                    <IconButton
                                        style={{
                                            marginLeft: 8,
                                            marginRight: 16
                                        }}
                                        aria-label="fingerprint"
                                        color="secondary"
                                    >
                                        <div
                                            style={{
                                                backgroundColor: '#E9E9E9',
                                                borderRadius: 6,
                                                width: 150
                                            }}
                                        >
                                            <img
                                                style={{ padding: 8, height: 30 }}
                                                src={require('../../assets/images/icons/upload.png')}
                                                alt=""
                                            />
                                        </div>
                                    </IconButton>
                                    <IconButton aria-label="fingerprint" color="secondary">
                                        <div style={{ backgroundColor: '#E9E9E9', borderRadius: 6, width: 150 }}>
                                            <img
                                                style={{ padding: 8, height: 30 }}
                                                src={require('../../assets/images/icons/delete.png')}
                                                alt=""
                                            />
                                        </div>
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

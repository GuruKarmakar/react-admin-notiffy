// material-ui
import { Typography, Box, Stack, Alert, Button } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Search from 'layout/MainLayout/Header/HeaderContent/Search';
import CustomizedTables from './CustomizedTables';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const Templates = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <Box mt={4}>
                <Typography variant="h4" component="h2">
                    Whatsapp Message Templates
                </Typography>
                <Box mt={2}></Box>
            </Box>

            <Box mt={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Stack direction="row">
                        <Search />
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 230, backgroundColor: '#E8E8E8' }}>
                                <InputLabel id="demo-simple-select-autowidth-label">All Categories</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={age}
                                    onChange={handleChange}
                                    autoWidth
                                    label="Age"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 230, backgroundColor: '#E8E8E8' }}>
                                <InputLabel id="demo-simple-select-autowidth-label">All Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={age}
                                    onChange={handleChange}
                                    autoWidth
                                    label="Age"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Stack>
                    <Button style={{ backgroundColor: '#3A7AD8' }} variant="contained">
                        Create New Template
                    </Button>
                </Stack>
            </Box>
            <Box mt={2} mb={2}>
                <Alert
                    style={{
                        width: '70%',
                        backgroundColor: '#EEEEEE'
                    }}
                    severity="success"
                >
                    All Whatsapp Message Templates must satisfy to the whatsapp Message template Guidelines. Click here to learn more.
                </Alert>
            </Box>
            <CustomizedTables />
        </div>
    );
};

export default Templates;

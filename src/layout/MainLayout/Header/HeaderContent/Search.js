// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => (
    <Box sx={{ ml: { xs: 0, md: 1, marginTop: 7 } }}>
        <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
            <OutlinedInput
                size="large"
                id="header-search"
                startAdornment={
                    <InputAdornment position="start" sx={{ mr: -0.5 }}>
                        <SearchOutlined />
                    </InputAdornment>
                }
                aria-describedby="header-search-text"
                inputProps={{
                    'aria-label': 'weight'
                }}
                placeholder="Search by template name"
            />
        </FormControl>
    </Box>
);

export default Search;

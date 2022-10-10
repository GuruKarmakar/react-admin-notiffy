// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';
import LogoSection from 'components/Logo/index';
import Typography from 'themes/overrides/Typography';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const HeaderLogo = () => (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
        <LogoSection />
    </Box>
);

export default HeaderLogo;

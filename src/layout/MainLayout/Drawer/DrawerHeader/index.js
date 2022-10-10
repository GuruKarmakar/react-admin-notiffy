/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip, Typography, Divider } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';
const appstore = require('../../../../assets/images/Vector.png');

const DrawerHeader = ({ open }) => {
    const theme = useTheme();

    return (
        <DrawerHeaderStyled theme={theme} open={open}>
            <Stack direction="row" spacing={2} alignItems="center">
                <div style={{ marinTop: 5 }}>
                    <img src={appstore} />
                </div>
                <div>
                    <Typography>APP ID : 6748987553</Typography>
                    <Typography>Phone : 6748987553</Typography>
                </div>
            </Stack>
        </DrawerHeaderStyled>
    );
};

DrawerHeader.propTypes = {
    open: PropTypes.bool
};

export default DrawerHeader;

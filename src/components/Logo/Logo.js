// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();
    const logo = require('../../assets/images/logo.png');

    return (
        <>
            <img src={logo} alt="Mantis" />
            <Typography style={{ color: 'white', marginLeft: 8 }} variant="h3">
                {' '}
                Notiffy
            </Typography>
        </>
    );
};

export default Logo;

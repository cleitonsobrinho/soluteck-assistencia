
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from '../NavBar';
import MenuMobail from '../MenuMobail';



export default function Header() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#0089D1',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='primary'>
                    <Toolbar>
                        <Typography className='title' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Energiar
                        </Typography>
                        <NavBar />
                        <MenuMobail />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>


    );
}
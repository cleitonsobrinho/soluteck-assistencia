
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';
import MenuMobail from '../MenuMobail';



export default function Header() {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className='title' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Energiar
                    </Typography>
                    <NavBar />
                    <MenuMobail />
                </Toolbar>
            </AppBar>
        </Box>


    );
}
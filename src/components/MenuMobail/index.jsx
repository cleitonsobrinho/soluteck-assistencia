import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ContainerMenu } from './styles';

import './styles'

export default function MenuMobail() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#e3f2fd',
            },
        },
    });


    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <ContainerMenu>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    < MenuIcon color="primary" />
                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <Link to="/" style={{ textDecoration: "none", color: "#000000dd" }}><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                    <Link to="/contact" style={{ textDecoration: "none", color: "#000000dd" }}> <MenuItem onClick={handleClose}>Contato</MenuItem></Link>
                    <Link to="/sobre" style={{ textDecoration: "none", color: "#000000dd" }}><MenuItem onClick={handleClose}>Sair</MenuItem></Link>
                </Menu>

            </ContainerMenu>

        </ThemeProvider >
    );
}
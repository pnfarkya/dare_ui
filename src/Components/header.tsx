
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import styles from '../styles/Home.module.css'
import { url } from 'inspector';  

const Header = () => (

    <header>
        <AppBar >
            <Typography variant="h3" component="h1">
                DARE
            </Typography>
            <Typography variant="h6" component="h6">
                DIGITAL-ASSET AGGREGATION AND RECOMMENDATION ENGINE​​
            </Typography>
        </AppBar>
    </header>
);

export default Header;


import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MenuIconOpen from '@material-ui/icons/MenuOpen';
import {useTheme} from '@material-ui/core';
import useWindowSize from '../hooks/useWindowResize';

export default function Burger() {
    const theme = useTheme();
    const {width: windowWidth} = useWindowSize();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleClick}
                color={windowWidth > theme.breakpoints.values.sm ? "secondary" : "primary"}
                style={{
                    marginRight: '-12px', /* align right with container text */
                }}
            >
                {Boolean(anchorEl) ? <MenuIconOpen style={{fontSize: '30px'}} /> : <MenuIcon style={{fontSize: '30px'}} />}
            </IconButton >
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>ABOUT</MenuItem>
                <MenuItem onClick={handleClose}>WORKS</MenuItem>
                <MenuItem onClick={handleClose}>PHOTOGRAPHY</MenuItem>
                <MenuItem onClick={handleClose}>CONTACT</MenuItem>
            </Menu>
        </div >
    );
}
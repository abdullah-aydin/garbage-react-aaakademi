import React from 'react'
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useStyles } from './header.module'

const Header = ({ open, handleDrawerToggle }) => {
    const classes = useStyles();
    const matches = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <AppBar
            position="fixed"
            className={clsx(!matches && classes.appBar, !matches && {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    className={clsx(classes.menuButton)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    AA | Akademi 
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header



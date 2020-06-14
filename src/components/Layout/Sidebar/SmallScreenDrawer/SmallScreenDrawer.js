import React from 'react'
import { ListItemIcon, Drawer, Divider } from '@material-ui/core';
import { useStyles } from './SmallScreenDrawer.module'

import SidebarList from '../SidebarList/SidebarList'
import { ListData } from '../../../../data/Data'

const SmallScreenDrawer = ({ open, handleDrawerToggle }) => {
    const classes = useStyles();
   
    return (
        <Drawer
            className={classes.drawer}
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
            onClose={handleDrawerToggle}
        >
            <div className={classes.drawerHeader}>
                <h3>AA|Akademi</h3>
            </div>
            <Divider />
            <SidebarList ListData={ListData} />
        </Drawer>
    )
}


export default SmallScreenDrawer

import React from 'react'
import { ListItemIcon, Drawer, List, ListItemText, ListItem, Divider} from '@material-ui/core';

import { useStyles} from './BigScreenDrawer.module'

import SidebarList from '../SidebarList/SidebarList'
import { ListData} from '../../../../data/Data'

const BigScreenDrawer =({open})=> {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                
                <h3> AA|Akademi</h3>
                
            </div>
            <Divider />
            <SidebarList ListData={ListData}/>

        </Drawer>
    )
}

export default BigScreenDrawer

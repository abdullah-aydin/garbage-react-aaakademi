import { ListItemIcon, Drawer, List, ListItemText, ListItem, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {useStyles} from './SidebarList.module'
import Link from '../../../../Link'

const SidebarList = ({ ListData }) => {
    const classes =useStyles();
    function activeRoute(routeName) {
        return window.location.href.indexOf(routeName) > -1 ? true : false;
    }
    
    return (
        <List>
            {ListData.map((text, index) => (
                <ListItem  component={Link} href={text.url} key={text.url} selected={activeRoute(text.url)}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text.name} style={{color:'black'}} />
                </ListItem>
            ))}
        </List>
    )
}

export default SidebarList

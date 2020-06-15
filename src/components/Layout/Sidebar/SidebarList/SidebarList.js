import { ListItemIcon, List, ListItemText, ListItem } from '@material-ui/core';

import {useStyles} from './SidebarList.module'
import Link from '../../../../Link'

const SidebarList = ({ ListData }) => {
    const classes =useStyles();
    function activeRoute(routeName) {
        return window.location.href.indexOf(routeName) > -1 ? true : false;
    }
    
    return (
      <List>
        {ListData.map((item, index) => (
          <ListItem
            component={Link}
            href={item.url}
            key={item.url}
            selected={activeRoute(item.url)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} style={{ color: "black" }} />
          </ListItem>
        ))}
      </List>
    );
}

export default SidebarList

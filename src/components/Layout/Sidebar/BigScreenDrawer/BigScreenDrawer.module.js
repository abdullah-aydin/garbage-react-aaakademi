import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WİTH } from '../../../../constants/constants'

export const useStyles = makeStyles((theme) => ({
    drawer: {
        width: DRAWER_WİTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: DRAWER_WİTH,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'center',
    },
}));
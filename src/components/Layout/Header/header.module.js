import { makeStyles} from '@material-ui/core/styles';

import { DRAWER_WİTH } from '../../../constants/constants'

export const useStyles = makeStyles((theme) => ({
    
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WİTH}px)`,
        marginLeft: DRAWER_WİTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));
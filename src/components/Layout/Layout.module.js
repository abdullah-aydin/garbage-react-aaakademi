import { makeStyles} from '@material-ui/core/styles';

import { DRAWER_WIDTH } from "./../../constants/constants";

export const useStyles = makeStyles((theme) => ({
         root: {
           display: "flex",
         },
         appBar: {
           transition: theme.transitions.create(["margin", "width"], {
             easing: theme.transitions.easing.sharp,
             duration: theme.transitions.duration.leavingScreen,
           }),
         },
         appBarShift: {
           [theme.breakpoints.down("md")]: {
             width: `calc(100% - ${DRAWER_WIDTH}px)`,
             marginLeft: 100,
             transition: theme.transitions.create(["margin", "width"], {
               easing: theme.transitions.easing.easeOut,
               duration: theme.transitions.duration.enteringScreen,
             }),
           },
         },
         menuButton: {
           marginRight: theme.spacing(2),
         },
         hide: {
           display: "none",
         },
         drawer: {
           width: DRAWER_WIDTH,
           flexShrink: 0,
         },
         drawerPaper: {
           width: DRAWER_WIDTH,
         },
         drawerHeader: {
           display: "flex",
           alignItems: "center",
           padding: theme.spacing(0, 1),
           // necessary for content to be below app bar
           ...theme.mixins.toolbar,
           justifyContent: "flex-end",
         },
         content: {
           //small screen
           flexGrow: 1,
           padding: theme.spacing(4),
           //small screen marginTop
           marginTop: 45,
           [theme.breakpoints.up("md")]: {
             //big screen
             // big screen marginTop
             marginTop: theme.spacing(12),
             // main screen left, right padding
             padding: theme.spacing(0, 8),
             transition: theme.transitions.create("margin", {
               easing: theme.transitions.easing.sharp,
               duration: theme.transitions.duration.leavingScreen,
             }),
             marginLeft: -DRAWER_WIDTH,
           },
         },
         contentShift: {
           transition: theme.transitions.create("margin", {
             easing: theme.transitions.easing.easeOut,
             duration: theme.transitions.duration.enteringScreen,
           }),
           marginLeft: 0,
         },
         contentIndex: {
           display: "flex",
         },
         constStructure: {
           marginBottom: theme.spacing(3),
         },
       }));
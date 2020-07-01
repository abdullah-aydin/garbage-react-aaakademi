import { makeStyles } from "@material-ui/core";

export const CardStyles = makeStyles((theme, props) => ({
         root: {
           height: "100%",
           backgroundColor: (props) => props.bgColor,
           color: theme.palette.primary.contrastText,
           minWidth: 100,
         },
         content: {
           alignItems: "center",
           display: "flex",
         },
         title: {
           fontWeight: 300,
         },
       }));

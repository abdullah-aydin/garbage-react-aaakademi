import { makeStyles } from "@material-ui/core";

export const BookStatsStyles = makeStyles((theme) => ({
         statsContainer: {
           display: "flex",
           textAlign: "center",
           justifyContent: "center",
         },
         stats: {
           borderTop: "2px solid #7f8c8d",
           borderRight: "2px solid #7f8c8d",
           "&:last-child": {
             borderRight: "none",
           },
         },
         statValue: {
           marginRight: 8,
           marginLeft: 8,
           fontWeight:"bold"
         },
         statName: {
           marginRight: 8,
           marginLeft: 8,
         },
       }));

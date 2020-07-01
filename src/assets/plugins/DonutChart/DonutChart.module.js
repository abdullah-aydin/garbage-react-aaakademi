import { makeStyles } from "@material-ui/core";

export const DonutChartStyles = makeStyles((theme) => ({
  root:{
    display:"flex",
    position:"relative",
    justifyContent:"center",
    alignItems:"center"
  },
  indicator: {
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    top:0,
    width: "100%",
    height: "100%",
    margin: "0px auto",
    color:"white",
    fontWeight:"bold"
  },
}));

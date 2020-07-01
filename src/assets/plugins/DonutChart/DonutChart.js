import React from "react";
import ProgressBar from "react-customizable-progressbar";
import Typography from "@material-ui/core/Typography";

// Theme
import { DonutChartStyles } from "./DonutChart.module";

function DonutChart({ progress }) {
  const classes = DonutChartStyles();

  function colorChange(){
      if (progress < 30) {
        return "#b51907";
      } else if (progress < 70 ) {
        return "#ffc60a";
      } else if (progress <= 100) {
        return "#5dab1d";
      } 
  }
  

  return (
    <ProgressBar
      radius={25}
      progress={progress}
      strokeWidth={5}
      strokeColor={colorChange()}
      trackStrokeWidth={5}
      trackStrokeColor="#c45252"
      fillColor="#dcc7c7"
      pointerRadius={5}
      pointerStrokeWidth={1}
      transition="4s ease"
      initialAnimation
      initialAnimationDelay={1000}
      className={classes.root}
    >
      <Typography className={classes.indicator} variant="button">
        {progress}%
      </Typography>
    </ProgressBar>
  );
}

export default DonutChart;
//radius={100}
//progress={66}
//fillColor="#2dd1f7"
//strokeColor="#fbfa3f"
//strokeLinecap="square"
//trackStrokeColor="#ff2f33"
//pointerRadius={5}
//pointerStrokeColor="#232311"
//pointerFillColor="#dcc7c7"
//style={{ width: "5vw", minWidth: "60px" }}

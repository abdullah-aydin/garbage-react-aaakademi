import React from "react";
import ProgressBar from "react-customizable-progressbar";
import Typography from "@material-ui/core/Typography";

// Theme
import { DonutChartStyles } from "./DonutChart.module";

function DonutChart({ progress }) {
  const classes = DonutChartStyles();

  return (
    <ProgressBar
      radius={25}
      progress={progress}
      fillColor="#3f51b5"
      strokeWidth={5}
      strokeColor="#ffd247"
      trackStrokeWidth={5}
      trackStrokeColor="#c45252"
      pointerRadius={5}
      pointerStrokeWidth={1}
      transition="4s ease"
      initialAnimation
      initialAnimationDelay={1000}
      className={classes.root}
    >
      <Typography
        className={classes.indicator}
        variant="button"
      >
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

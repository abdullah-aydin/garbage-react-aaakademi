import React from "react";
import { Box } from "@material-ui/core";

//theme
import { BookStatsStyles } from "./BookStats.module";

export default function BookStats({read, total}) {
  const classes = BookStatsStyles();

  return (
    <Box className={classes.statsContainer}>
      <Box className={classes.stats}>
        <Box className={classes.statValue}>
          {read}
        </Box>
        <Box className={classes.statName}>
          okunan
        </Box>
      </Box>
      <Box className={classes.stats}>
        <Box className={classes.statValue} >
          {total}
        </Box>
        <Box className={classes.statName} >
          toplam
        </Box>
      </Box>
    </Box>
  );
}

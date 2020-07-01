import React from "react";
// @material-ui
import {Box} from "@material-ui/core";
// @material-ui icons
// Component
// Theme
import { BookCardStyles } from "./ActiveBookCard.module";
// Data

export default function EmptyBookCard() {
  const classes = BookCardStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.card} style={{ backgroundColor: "#F4F6F8" }} />
    </Box>
  );
}

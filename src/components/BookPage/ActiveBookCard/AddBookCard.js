import React from "react";
// @material-ui
import {
  Box,
  Paper,
  Typography,
  CardActionArea,
} from "@material-ui/core";
// @material-ui icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// Component
// Theme
import { BookCardStyles } from "./ActiveBookCard.module";
// Data

export default function AddBookCard() {
  const classes = BookCardStyles();

  return (
    <Paper className={classes.root} elevation={15}>
      <CardActionArea>
        <Box
          className={classes.card}
          style={{
            backgroundColor: "#e0dfdc",
            border: "2px dashed #7f8c8d",
          }}
        >
          <AddCircleOutlineIcon fontSize="large" />
          <br />
          <Typography variant="h5" className={classes.addBookTypography}>
            yeni kitap ekle
          </Typography>
        </Box>
      </CardActionArea>
    </Paper>
  );
}

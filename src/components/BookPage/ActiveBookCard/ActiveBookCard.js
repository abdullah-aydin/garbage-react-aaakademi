import React from "react";
// @material-ui
import { Box, Grid, Paper, Typography, Fab } from "@material-ui/core";

import DonutChart from "../../../assets/plugins/DonutChart/DonutChart";
// @material-ui icons
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
// Component
import BookStats from "./BookStats/BookStats";
// Theme
import { BookCardStyles } from "./ActiveBookCard.module";
// Data

export default function BookCard({
  name,
  initDate,
  readPage,
  totalPage,
  image,
}) {
  const classes = BookCardStyles();
  const progress = ((readPage / totalPage) * 100).toFixed(1);

  return (
    <Paper className={classes.root} elevation={15}>
      <Box className={classes.card}>
        <Box className={classes.imageWrap}>
          <img className={classes.image} src={image} alt="bookImage" />
        </Box>
        <Box className={classes.content}>
          <Box className={classes.bookName}>
            <Typography variant="h5">{name}</Typography>
          </Box>
          <Box className={classes.bookInitDate}>
            <Typography variant="body2">Başlangıç: {initDate}</Typography>
          </Box>
          <Box className={classes.bookStats}>
            <BookStats read={readPage} total={totalPage} />
          </Box>
          <Box className={classes.buttons}>
            <Fab
              variant="extended"
              size="small"
              aria-label="add"
              className={classes.addPageButton}
            >
              <AddIcon fontSize="small" style={{ marginRight: 5 }} />
              <Typography variant="caption">Sayfa Ekle</Typography>
            </Fab>
            <Fab
              variant="extended"
              size="small"
              aria-label="edit"
              className={classes.editButton}
            >
              <EditIcon fontSize="small" />
            </Fab>
          </Box>
        </Box>
      </Box>
      <Box className={classes.chart}>
        <DonutChart progress={progress} />
      </Box>
    </Paper>
  );
}

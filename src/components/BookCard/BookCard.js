import React from "react";
// @material-ui
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import DonutChart from "../DonutChart/DonutChart";
// @material-ui icons
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
// Component
import BookStats from "./BookStats/BookStats";
// Theme
import { BookCardStyles } from "./BookCard.module";
// Data

export default function BookCard({
  name,
  initDate,
  readPage,
  totalPage,
  image,
}) {
  const classes = BookCardStyles();
  const progress = ((readPage/totalPage)*100).toFixed(1);

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
            <Typography variant="body2">{initDate}</Typography>
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
              <AddIcon fontSize="small" />
              <Typography variant="caption">Sayfa Ekle</Typography>
            </Fab>
            <Fab variant="extended" size="small" aria-label="edit">
              <EditIcon fontSize="small" />
            </Fab>
          </Box>
        </Box>
      </Box>
      <Box className={classes.chart}>
        <DonutChart progress={progress}/>
      </Box>
    </Paper>
  );
}

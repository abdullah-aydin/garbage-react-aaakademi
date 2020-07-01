import React from "react";
// @material-ui
import { Box, Grid, Paper, Typography, Fab } from "@material-ui/core";
// @material-ui icons
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
// Component
import BookStats from "../ActiveBookCard/BookStats/BookStats";
// Plugins
import DonutChart from "../../../assets/plugins/DonutChart/DonutChart";
// Theme
import { BookCardStyles } from "../ActiveBookCard/ActiveBookCard.module";
// Data

export default function CompletedBookCard({
  name,
  initDate,
  totalPage,
  image,
}) {
  const classes = BookCardStyles();

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
            <Typography variant="body2">
              Başlangıç:{initDate} <br />
              Bitiş:{initDate}
            </Typography>
          </Box>
          <Box className={classes.bookStats}>
            <Typography variant="body1">Toplam {totalPage} Sayfa</Typography>
          </Box>
          <Box className={classes.buttons}>
            <Fab
              variant="extended"
              size="small"
              aria-label="add"
              className={classes.addPageButton}
            >
              <EditIcon fontSize="small" style={{marginRight:5}} />
              <Typography variant="caption">Kitaba dair</Typography>
            </Fab>
          </Box>
        </Box>
      </Box>
      <Box className={classes.chart}>
        <DonutChart progress="100" />
      </Box>
    </Paper>
  );
}

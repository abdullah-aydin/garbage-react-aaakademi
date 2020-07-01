import React from "react";
// @material-ui
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
// Theme
import { CardStyles } from "./Card.module";


const myCard = (props) => {
  const classes = CardStyles(props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid>
          <Grid item>
            <Typography color="inherit" variant="h2" align="center">
              {props.state1} {props.state2 && "| " + props.state2}
            </Typography>
            <Typography
              className={classes.title}
              color="inherit"
              variant="subtitle2"
              align="center"
            >
              {props.state3}
            </Typography>
            <hr color={"white"}/>
            <Typography
              className={classes.title}
              color="inherit"
              variant="h5"
              align="center"
            >
              <b>{props.state4}</b>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default myCard;

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    padding: 25,
    boxSizing: "border-box"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const SmurfCard = ({ name, age, height }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Age: {age}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Height: {height}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SmurfCard;

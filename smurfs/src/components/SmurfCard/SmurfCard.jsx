import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { removeSmurf } from "../../actions/smurfActions";

import { useDispatch } from "react-redux";

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
  },
  button: {
    width: "100%",
    margin: "0 auto",
    padding: "10px 10px"
  }
});

const SmurfCard = ({ name, age, height, smurfId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRemove = () => {
    dispatch(removeSmurf(smurfId));
  };
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
      <CardActions>
        <Button
          onClick={handleRemove}
          className={classes.button}
          size="small"
          color="primary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default SmurfCard;

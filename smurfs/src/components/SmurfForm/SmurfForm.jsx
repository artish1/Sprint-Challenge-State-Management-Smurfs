import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { addSmurf } from "../../actions/smurfActions";
//Redux
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#f5f5f5",
    maxWidth: 1000,
    padding: "25px 10px",
    margin: "0 auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  textFields: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing(1),
    width: "50%"
  },
  input: {
    display: "none"
  }
}));

const initialFormData = {
  name: "",
  age: "",
  height: ""
};

const SmurfForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleOnChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSmurf(formData));
    setFormData(initialFormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" component="h2">
        Add New Smurf
      </Typography>
      <div className={classes.textFields}>
        <TextField
          id="outlined-basic"
          name="name"
          className={classes.textField}
          label="Smurf Name"
          placeholder="Name"
          margin="normal"
          variant="outlined"
          value={formData.name}
          onChange={handleOnChange}
        />
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Age"
          name="age"
          placeholder="Age"
          margin="normal"
          variant="outlined"
          value={formData.age}
          onChange={handleOnChange}
        />
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Height"
          name="height"
          placeholder="Height"
          margin="normal"
          variant="outlined"
          value={formData.height}
          onChange={handleOnChange}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Add Smurf
      </Button>
    </form>
  );
};

export default SmurfForm;

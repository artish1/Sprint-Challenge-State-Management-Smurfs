import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#f5f5f5",
    maxWidth: 1000,
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
  const classes = useStyles();

  const handleOnChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted with data: ", formData);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className={classes.textFields}>
        <TextField
          id="outlined-basic"
          name="name"
          id="name"
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
          id="age"
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
          id="height"
          placeholder="Height"
          margin="normal"
          variant="outlined"
          value={formData.height}
          onChange={handleOnChange}
        />
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        Add Smurf
      </Button>
    </form>
  );
};

export default SmurfForm;

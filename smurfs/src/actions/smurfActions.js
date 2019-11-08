import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const ADD_SMURF = "ADD_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err.message });
    });
};

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log("AddSmurf error: ", err.message);
    });
};

export const removeSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: REMOVE_SMURF, payload: id });
    })
    .catch(err => console.log(err.message));
};

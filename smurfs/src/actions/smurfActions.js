import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

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
  dispatch({ type: ADD_SMURF_START });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("AddSmurf error: ", err.message);
      dispatch({ type: ADD_SMURF_FAIL, payload: err.message });
    });
};

import {
  FETCH_SMURFS_FAIL,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS
} from "../actions/smurfActions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return { ...state, isFetching: true, error: "" };
    case FETCH_SMURFS_SUCCESS: // { type: FETCH_SMURFS_SUCCESS, payload: res.data}
      return { ...state, isFetching: false, smurfs: action.payload, error: "" };
    case FETCH_SMURFS_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};

import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs/Smurfs";
import { connect } from "react-redux";

import { getSmurfs } from "../actions/smurfActions";
import SmurfForm from "./SmurfForm/SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSmurfs: () => dispatch(getSmurfs())
  };
};

export default connect(
  () => {
    return {};
  },
  mapDispatchToProps
)(App);

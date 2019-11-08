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

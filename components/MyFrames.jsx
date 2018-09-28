import React, { Component } from "react";
import MyFrame from "./MyFrame";
import { Consumer } from "../newContext";

class MyFrames extends Component {
  handleReset = () => {};

  render() {
    return (
      <Consumer>
        {value => {
          const { texts } = value;
          return texts.map(text => {
            return <MyFrame key={text.id} id={text.id} text={text.text} />;
          });
        }}
      </Consumer>
    );
  }
}

export default MyFrames;

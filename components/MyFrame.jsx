import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../newContext";

class MyFrame extends Component {
  state = {
    divText: "Hello World! How are you doing?"
  };

  flag = false;

  handleButtonClick = () => {
    this.flag = true;
    let text = document.getElementById("myText" + this.props.id);
    this.setState({ divText: text.value });
  };

  handleDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_FRAME", payload: id });
  };

  render() {
    const { id } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <div className="card" style={{ textAlign: "center" }}>
                {!this.flag ? this.props.text : this.state.divText}
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={this.handleDeleteClick.bind(this, id, dispatch)}
                />
                <input type="text" name="Name" id={"myText" + this.props.id} />
                <button
                  className="btn bg-warning"
                  onClick={this.handleButtonClick}
                >
                  Click Me
                </button>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
MyFrame.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
export default MyFrame;

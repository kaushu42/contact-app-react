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
    if (text.value !== "") this.setState({ divText: text.value });
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
          const style = {
            margin: "0 auto",
            float: "none"
          };
          return (
            <React.Fragment>
              <div className="card m-3 " style={{ textAlign: "center" }}>
                {!this.flag ? this.props.text : this.state.divText}
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={this.handleDeleteClick.bind(this, id, dispatch)}
                />
                <input
                  type="text"
                  name="Name"
                  className="w-75"
                  style={style}
                  id={"myText" + this.props.id}
                />
                <button
                  className="btn bg-warning w-25"
                  style={style}
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
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default MyFrame;

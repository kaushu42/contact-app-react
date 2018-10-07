import React, { Component } from "react";
import PropTypes from "prop-types";

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showInfo: false
  };

  handleOnClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  handleDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, weapon, position } = this.props.contact;
    const { showInfo } = this.state;
    /*To pass params this.handleOnClick.bind(this, name) */
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.handleOnClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.handleDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <b>Power:</b> {weapon}
                  </li>
                  <li className="list-group-item">
                    <b>Alliance:</b> {position}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

Contact.defaultProps = {
  contact: { id: null, name: "-", weapon: "-", position: "-" }
};
export default Contact;

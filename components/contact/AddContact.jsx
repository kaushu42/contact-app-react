import React, { Component } from "react";

import uuid from "uuid";

import { Consumer } from "../../context";
import FormInputField from "../layout/FormInputField";

class AddContact extends Component {
  state = {
    name: "",
    power: "",
    alliance: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, power, alliance } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (power === "") {
      this.setState({ errors: { power: "Power is required" } });
      return;
    }
    if (alliance === "") {
      this.setState({ errors: { alliance: "Alliance is required" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      power,
      alliance
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });
    this.setState({
      name: "",
      power: "",
      alliance: "",
      errors: {}
    });
  };

  render() {
    const { name, power, alliance } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { errors } = this.state;

          return (
            <div className="card mb-3">
              <div className="card-header bg-dark text-light">Add Info</div>
              <div className="card-body bg-light text-dark">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <FormInputField
                    label="Name"
                    name="name"
                    type="text"
                    onChange={this.onChange}
                    value={name}
                    placeholder="Enter name..."
                    error={errors.name}
                    key={1}
                  />
                  <FormInputField
                    label="Power"
                    name="power"
                    type="text"
                    onChange={this.onChange}
                    value={power}
                    placeholder="Enter power..."
                    error={errors.power}
                    key={2}
                  />
                  <FormInputField
                    label="Alliance"
                    name="alliance"
                    type="text"
                    onChange={this.onChange}
                    value={alliance}
                    placeholder="Enter alliance..."
                    error={errors.alliance}
                    key={3}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

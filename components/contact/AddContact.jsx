import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    weapon: "",
    position: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, weapon, position } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header bg-dark text-light">Add Info</div>
        <div className="card-body bg-light text-dark">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weapon">Weapon</label>
              <input
                type="text"
                name="weapon"
                className="form-control"
                placeholder="Enter Weapon..."
                value={weapon}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                className="form-control"
                placeholder="Enter Position..."
                value={position}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;

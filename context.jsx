import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 0,
        name: "Javascript",
        weapon: "Frameworks",
        position: "Web"
      },
      {
        id: 1,
        name: "Iron Man",
        weapon: "Iron Suit",
        position: "Avenger"
      },
      {
        id: 2,
        name: "Thanos",
        weapon: "Infinity Stones",
        position: "Evil"
      },
      {
        id: 3,
        name: "Dr. Strange",
        weapon: "Magic",
        position: "Wizard"
      },
      {
        id: 4,
        name: "Spiderman",
        weapon: "Spider-web",
        position: "Avenger"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

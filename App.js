import React, { Component } from "react";
import "./App.css";

import Contacts from "./components/contact/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contact/AddContact";
import { Provider } from "./context";

// import MyFrames from "./components/MyFrames";
// import { Provider } from "./newContext";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      // <Provider>
      //   <MyFrames />
      // </Provider>
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

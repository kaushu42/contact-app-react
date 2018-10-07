import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/contact/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contact/AddContact";
import { Provider } from "./context";

// import MyFrames from "./components/MyFrames";
// import { Provider } from "./newContext";
// import AddFrame from "./components/AddFrame";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      // <Provider>
      //   <div className="container">
      //     <MyFrames />
      //     <AddFrame />
      //   </div>
      // </Provider>
      <Provider>
        <Router>
          <div className="App">
            <Header />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

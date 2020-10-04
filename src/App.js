import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import User from './pages/user.js';
import MainPage from "./pages/main-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <div className="container">
                  <Switch>
                      <Route path="/" exact component={MainPage} />
                      <Route path="/user" exact component={User} />
                  </Switch>
              </div>
          </div>
      </Router>

  );
}

export default App;

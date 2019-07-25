import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./pages/Nav";
import Home from "./pages/Home/Home"
import Resources from "./pages/Resources";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./pages/Footer";
import Login from "./pages/Login/Login";


class App extends Component {
  state = {
    user: null
  }

  setUser = (user) => this.setState({ user });

  render() {
    return (
<Router>
    <div>
    <Nav 
      setUser={this.setUser}
      user={this.state.user}
      />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Resources" component={Resources}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Dashboard" component={() => this.state.user ? <Dashboard user={this.state.user}/> : <Home />}/>
    <Route exact path="/SignUp" component={SignUp}/>
    <Route exact path="/Login" component={Login}/>
  
    </Switch>

    <Footer />
  </div>
  </Router>
    )
}
}

export default App;

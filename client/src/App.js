import React, { Fragment, } from 'react';
import { Route, Switch, } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "./components/NoMatch"
import Navbar from "./components/Navbar"
import Departments from "./components/Departments"
import DepartmentsForm from "./components/DepartmentsForm"
import './App.css';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route exact path="/departments" component={Departments} />
        <Route component={NoMatch}  />
      </Switch>
    </Container>
  </Fragment>
)

export default App;

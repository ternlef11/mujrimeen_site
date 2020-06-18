import React, { Component } from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import Land from './Land';
import About from './About';
import Circles from './Circles';
import Bounce from './Bounce';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render() {
    return (
    <Route render={({location})=>(
      <TransitionGroup>
      <CSSTransition
      key={location.key}
      timeout={1000}
      classNames="fade">
          <Switch location={location}>
            <Route exact path="/Land" component={Land}/>
            <Route path="/About" component={About}/>
            <Route path="/Circles" component={Circles}/>
            <Route path="/Bounce" component={Bounce}/>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
  );
}
}

export default App;

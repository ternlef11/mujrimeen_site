import React from 'react';
import Video from './eggblack_sma.gif';
import './mujstyle.css';
import {
  Route,
  Switch,
  Link
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import App from './Container';

function Land() {
  return (
    <Route render={({location})=>(
        <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={1000}
        classNames="fade">
          <Switch location={location}>
  <div>
    <div id='landingbg'>
      <div id="demo">
        <div className='eggcont'>
              <div className='navicircle'>
                <img alt="egg_gif" className="theegggiff" src={Video}></img>
                <Link to="/About">
                  <div className='overcircle'>
                  </div>
                </Link>
              </div>
        </div>
        <Link to="/Circles"><h1>Circles</h1></Link>
        <Link to="/Boucnce"><h1>Bounce</h1></Link>
      </div>
    </div>
    <App />
  </div>
  </Switch>
</CSSTransition></TransitionGroup>
)}/>


  );
}

export default Land;

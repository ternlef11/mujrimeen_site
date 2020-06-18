import React from 'react';
import Gittoggle from './gitlink.js';
import Instatoggle from './instalink.js';
import Cttoggle from './websitelink.js';
import LNtoggle from './linkedinlink.js';
import Sketch from "react-p5";
import './mujstyle.css';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import Videowhi from './eggwhite_sma.gif';
import {
  Route,
  NavLink,
  Switch,
  Link
} from "react-router-dom";

function About() {
  return (
    <Route render={({location})=>(
        <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={1000}
        classNames="fade">
        <Switch location={location}>
    <div className='About'>
        <div className='eggcont'>

                <div className='navicircle'>
                    <img className="theegggiff" src={Videowhi}></img>
                <Link to="/">
                    <div className='overcircle'>
                    </div>
                </Link>
                </div>
            <div className='eggmeans'>
                <p className="mujrim">mujrim. <i>adjective</i>.</p>
                <p className="mujrimdef">is the one who commits an act of disobedience or violates the Law or wrongfully exploits a situation or steals the fruit of others’ labour.</p>
                <p className="mujrimexample">(in 68:35 the word muslimeen has been used in contrast to mujrimeen.)</p>
            </div>
        </div>
        <div className='aboutspage'>
            <div className='todaycont'>
                <div className='todayiwill'>
                    <p>NEXT I WILL:</p>
                    <p>Finish About | Transitions | Posterpage1</p>
                </div>
            </div>
            <div className='summarycont'>
                <div className='summary'>
                    <h1 className="abouttitle">Mujrimeen</h1>
                    <p>collection of creative shipwrecks marooned between 2300 & 0500 in no specific arrangement. a home for unfinished, forsaken ink caught between wheat paste, & whatever else makes the cut. but more than anything an excuse to polish my JS & make it look as if my github is alive.</p>
                    <p>born iraq, grew up new zealand, bounced around the gulf, living in switzerland. footagehead: film, tape, & cinema; write on film & fashion; leather worker & furniture maker on the best & worst days; code for the heck of it- wish i knew better.</p>
                    <p>i get shit done & am always logged on. contact me if you're up for it, can't disguise mediocrity.</p>
                </div>
                <div className='mylinkscont'>
                    <div className='mylinks'>
                        <Gittoggle/>
                        <Instatoggle/>
                        <Cttoggle/>
                        <LNtoggle/>
                        <div className="emaillink"></div>
                        <canvas id="drawspace" width="800" height="500"></canvas><canvas></canvas>
                    </div>
                </div>
            </div>
            <div className='experiencecont'>
                <div className='experience'>
                    <div className='academiacont'>
                        <div className='academia'>
                            ACADEMIA
                        </div>
                    </div>
                    <div className='workcont'>
                        <div className='work'>
                            WORK
                        </div>
                    </div>
                </div>
            </div>
            <div className='footercont'>
                <div className='footer'>
                    <div className='copyright'>take what you need 2020 (eat my shit).</div>
                </div>
            </div>
        </div>
    </div>
    </Switch>
          </CSSTransition></TransitionGroup>
          )}/>
  );
}

export default About;

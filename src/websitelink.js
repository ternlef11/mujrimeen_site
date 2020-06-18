import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const imagesPath = {
  free: "ctlink",
  visit: "ctlinkvisited"
}


export default class Cttoggle extends Component {
    state = {
        open: true,
    }
    toggleImage = () => {
        this.setState(state => ({ open: false }))
    }
    getImageName = () => this.state.open ? 'free' : 'visit'
    render() {
        const imageName = this.getImageName();
            return (
            <a className={imagesPath[imageName]} href="http://cutthwice.com/" target="_blank" onClick={this.toggleImage} />
                );
    }
}

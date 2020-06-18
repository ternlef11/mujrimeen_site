import React, { Component } from 'react';

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
            <a rel="noopener noreferrer" className={imagesPath[imageName]} href="http://cutthwice.com/" target="_blank" onClick={this.toggleImage}><i className="anchoertext" aria-hidden="true"/> </a>

                );
    }
}

import React, { Component } from 'react';

const imagesPath = {
  free: "instalink",
  visit: "instalinkvisited"
}


export default class Instatoggle extends Component {
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
            <a rel="noopener noreferrer" className={imagesPath[imageName]} href="https://www.instagram.com/slimenbile/" target="_blank" onClick={this.toggleImage}><i className="anchoertext" aria-hidden="true"/> </a>

                );
    }
}

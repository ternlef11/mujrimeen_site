import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const imagesPath = {
  free: "LNlink",
  visit: "LNlinkvisited"
}


export default class LNtoggle extends Component {
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
            <a className={imagesPath[imageName]} rel="noopener noreferrer" href="https://www.linkedin.com/in/ali-razzak-datasci/" target="_blank" onClick={this.toggleImage} />
                );
    }
}

import React, { Component } from 'react';

const imagesPath = {
  free: "githublink",
  visit: "githublinkvisited"
}


export default class Gittoggle extends Component {
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
            <a className={imagesPath[imageName]} rel="noopener noreferrer" href="https://github.com/ternlef11" target="_blank" onClick={this.toggleImage}><i className="anchoertext" aria-hidden="true"/> </a>
                );
    }
}

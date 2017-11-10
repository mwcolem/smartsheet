import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var name = this.props.name;
        
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React, {name}</h2>
            </div>
        );
    }
}

export default Header;
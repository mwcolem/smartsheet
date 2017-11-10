import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);

        this.state = { toggled: props.isToggled }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var newToggle = !this.state.isToggled;

        this.setState({isToggled: newToggle});

        this.props.callbackParent(newToggle);
    }

    render() {
        return(
            <button onClick={() => this.handleClick()}>
                {this.state.isToggled? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;
import React, { Component } from 'react';

class SubmitName extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmitClick(e) {
        e.preventDefault();
    
        var name = this.refs.name.value;
    
        this.setState({
          name : name
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmitClick}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
        );
    }
}

export default SubmitName;
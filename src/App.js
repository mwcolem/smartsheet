import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import SubmitName from './SubmitName.js';
import Toggle from './Toggle.js';

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {isToggled: true};
    this.state = {name: "test"};

    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick(e) {
    e.preventDefault();

    var name = this.refs.name.value;

    this.setState({
      name : name
    });
  }

  onToggleChanged(newToggle) {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  render() {
    var name = this.state.name;
    
    return (
      <div className="App">
        <Header name={name}/>
        
        <form onSubmit={this.handleSubmitClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
        
        <Toggle initialToggle={this.state.isToggled}
                callbackParent={(newToggle) => this.onToggleChanged(newToggle)}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class App extends Component {
  state = { on: true };
  // Function to toggle the state of the switch
  toggle = () => {
   const isOn = this.state.on; 
   this.setState({ on: !isOn});
  };
  render() {
    let wallClass = "wall off";
    if (this.state.on) {
      wallClass = "wall on";
    }
    return (
      <div className={wallClass}>
        <div className="switch-plate">
          <div className="screw" />
          <div className = "switch" onClick={this.toggle}/>;
          <div className="switch">
            <div className="switch-handle" />
          </div>
          <div className="screw" />
        </div>
      </div>
    );
  }
}

export default App;

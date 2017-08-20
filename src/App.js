import React, { Component } from 'react';
import './App.css';
import HabitTracker from './HabitTracker';

// State should also toggle on tab
//Row changes color when Goal === Done It 
//TODO Create component that toggles between an edit mode and display mode
//TODO Use component for Habit and Goal 
//Make HabitRow component 
//Make component where you can add and delete HabitRows


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      increment: 0,
      goal: 0
    }
  }

  incrementNum = () => { 
    this.setState( (props) =>{
      return {increment : this.state.increment + 1}
    });
  }
j
  render() {
    return (
      <div className="main-container">
        <h1>Habitrack</h1>
        <div className="flex-container">
          <HabitTracker/>
          <HabitTracker/>
          <HabitTracker/>
        </div>
      </div>
    );
  }
}

export default App;

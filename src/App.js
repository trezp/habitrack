import React, { Component } from 'react';
import './App.css';
import HabitTracker from './HabitTracker';

// Add and delete habits 
  // Make ghost tile for adding a habit 
// Goal should be X times per time period
// Make input fields prettier 
// "Last achieved" stamp
// Habit tile color coding
  // Based on "Last achieved" stamp
// Data should persist
// Draw a check mark when completed a goal
// Drag and Drop 


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numOfHabitTrackers: 0,
      habitTrackers : []
    }
  }

  handleAdd = () => { 
    this.state.habitTrackers.push(<HabitTracker key={this.state.numOfHabitTrackers}/>)
    this.setState({numOfHabitTrackers: this.state.numOfHabitTrackers + 1})
  }
j
  render() {
    return (
      <div className="main-container">
        <h1>Habitrack</h1>
        <div id="habit-container" className="flex-container">
            {this.state.habitTrackers.map((habitTracker)=>{
              return habitTracker;
            })}
          <div 
            className="tile" onClick={this.handleAdd}>
            Add New Goal 
            <span className="add"> + </span> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;

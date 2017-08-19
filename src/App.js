import React, { Component } from 'react';
import './App.css';

// TODO Make sure the user has added only a number
// State should also toggle when/if focus leaves
//Row changes color when Goal === Done It 
//TODO Create component that toggles between an edit mode and display mode
//TODO Use component for Habit and Goal 
//Make HabitRow component 
//Make component where you can add and delete HabitRows

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      formId: 0,
      goalId: 0,
      increment: 0,
      goal: 0
    }

  }
  
  componentDidMount(){
    const formId = "form" + this.state.formId;
    const goalNum = "goal" + this.state.goalId;
    document.getElementById(formId).style.display = "none";
    document.getElementById(goalNum).style.display = "table";
  }

  incrementNum = () => { 
    this.setState( (props) =>{
      return {increment : this.state.increment + 1}
    });
  }

  updateGoal = (event) => {
    const formId = "form" + this.state.formId;
    const goalNum = "goal" + this.state.goalId;
  
    if(event.keyCode === 13){
      const currentValue = event.target.value;
      this.setState({goal : currentValue});
      document.getElementById(formId).style.display = "none";
      document.getElementById(goalNum).style.display = "table";
    }
  }

  toggleEditMode = () => {
    const input = "form" + this.state.formId;
    const goalNum = "goal" + this.state.goalId;
    document.getElementById(goalNum).style.display = "none";
    document.getElementById(input).style.display = "inline-block";
  }


  render() {
    return (
      <div className="App">
        <h1>Habitrack</h1>
        <div className="table-container">
          <table className="main-table">
            <tbody>
              <tr>
                <th>Habit</th>
                <th>Goal</th>
                <th>Done It</th>
              </tr>
              <tr>
                <td>Avoid Sweets</td>
                <td className="input-goal">
                  <input id={"form" + this.state.formId} type="text" onKeyDown={this.updateGoal}></input>
                  <span 
                    id={"goal" + this.state.goalId}
                    onClick={this.toggleEditMode}>{this.state.goal}</span>
                </td>
                <td>{this.state.increment}</td>
                <td>
                  <button 
                    onClick={this.incrementNum}
                    className="button">I did it!
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

// TODO Make sure the user has added only a number
// State should also toggle when/if focus leaves
//Row changes color when Goal === Done It 
//TODO Create component that toggles between an edit mode and display mode
//TODO Use component for Habit and Goal 
//Make HabitRow component 
//Make component where you can add and delete HabitRows

class TextFieldEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      editModeOn: false,
      num: "Click to Add"
    }
  }

  handleUpdate = (event) => {
    if(event.keyCode === 13){
      const currentValue = event.target.value;
      this.setState({
        num : currentValue,
        editModeOn: false
      });
    }
  }

  turnEditModeOn = () =>{
    this.setState({editModeOn: true});
  }

  turnEditModeOff = () => {
    this.setState({editModeOn: false});
  }

  render(){
    return (
      <div>
        {this.state.editModeOn === true ? 
          <input 
            type="text" 
            onKeyDown={this.handleUpdate}></input> 
          :
          <span onClick={this.turnEditModeOn}>{this.state.num}</span>
        }
      </div>
    )
  }
}

class HabitRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      increment: 0
    }

  }

  incrementNum = () => { 
    this.setState( (props) =>{
      return {increment : this.state.increment + 1}
    });
  }

  render() {
    return (
      <div className="table-container">
      <table className="main-table">
        <tbody>
          <tr>
            <th>Habit</th>
            <th>Goal</th>
            <th>Done It</th>
          </tr>
          <tr>
            <td><TextFieldEditor/></td>
            <td className="input-goal">
              <TextFieldEditor/>
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
    );
  }
}
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

  incrementNum = () => { 
    this.setState( (props) =>{
      return {increment : this.state.increment + 1}
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Habitrack</h1>
        <HabitRow/>
        <HabitRow/>
      </div>
    );
  }
}

export default App;

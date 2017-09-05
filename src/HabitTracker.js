import React, { Component } from 'react';
import NumFieldEditor from './NumFieldEditor';
import TextFieldEditor from './TextFieldEditor';
import './index.css';

 class HabitTracker extends Component {
    constructor(props){
      super(props);
      this.state = {
        increment: 0,
        num: 0,
        editMode: true,
        goalReached: false
      }
    }
    
    incrementNum = (event) => { 
      console.log("this is only a test")
      if(event.target.className === "button"){
        const tile = event.target.parentNode.parentNode;
        if(this.state.num === this.state.increment + 1) {
          tile.style.background = "green";
        }
        this.setState({increment : this.state.increment + 1
        });
      }
     
    }

    checkIfEqual = () => {

    }

    handleUpdate = (event) => {

      if(event.keyCode === 13 || event.keyCode === 9){

        const currentValue = parseInt(event.target.value);
  
        if (Number.isInteger(currentValue)){
          this.setState({
            num : currentValue,
            isNum: true,
            editMode: false
          });
        } else {
          this.setState({
            errorMsg: true,
            editMode: true
          });
        }
      } else {
        this.setState({
          editMode: true
        });
      }
    }
  
    render() {
      return (
          <ul onClick={this.incrementNum} className="tile">
            <li><TextFieldEditor text="+ Add a Habit" /></li>
            <li><NumFieldEditor 
                      num={this.state.num} 
                      handleUpdate={this.handleUpdate}
                      editMode={this.state.editMode}
                      onClick={this.handleClick}/>
            </li>
            <li>Done It: {this.state.increment}</li>
            <li><button className="button">Did it!</button></li>
          </ul>
      );
    }
  }

  export default HabitTracker;
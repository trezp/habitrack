import React, { Component } from 'react';

class TextFieldEditor extends Component {
    constructor(props){
      super(props);
      this.state = {
        editModeOn: false,
        text: "Add a Habit"
      }
    }
  
    handleUpdate = (event) => {
      if(event.keyCode === 13|| event.keyCode === 9){
        const currentValue = event.target.value;
  
        this.setState({
          text : currentValue,
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
            <input type="text" onKeyDown={this.handleUpdate}></input> 
            :
            <span onClick={this.turnEditModeOn}>{this.state.text}</span>
          }
        </div>
      )
    }
  }
  
 export default TextFieldEditor;
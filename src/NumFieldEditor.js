import React, { Component } from 'react';

class NumFieldEditor extends Component {
    constructor(props){
      super(props);
      this.state = {
        editModeOn: false,
        num: 0,
        isNum: false,
        errMsg: "Please enter a number"
      }
    }
  
    handleUpdate = (event) => {
      if(event.keyCode === 13 || event.keyCode === 9){
        const currentValue = parseInt(event.target.value);
  
        if (Number.isInteger(currentValue)){
          this.setState({
            num : currentValue,
            editModeOn: false,
            isNum: true
          });
        } else {
          this.setState({
            errorMsg: true,
            editModeOn: false
          });
        }
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
        <span>
           {this.state.editModeOn === true ? 
            <input type="text" onKeyDown={this.handleUpdate}></input> 
            :
           <span onClick={this.turnEditModeOn}> Goal: {this.state.num}</span>
          }
        </span>
      )
    }
  }

export default NumFieldEditor;
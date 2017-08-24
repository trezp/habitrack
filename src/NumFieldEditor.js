import React, { Component } from 'react';

class NumFieldEditor extends Component {
    constructor(props){
      super(props);
      this.state = {
        editModeOn: false,
        errMsg: "Please enter a number"
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
           {this.props.editMode === true ? 
            <input type="text" onKeyDown={this.props.handleUpdate}></input> 
            :
           <span> Goal: {this.props.num}</span>
          }
        </span>
      )
    }
  }

export default NumFieldEditor;
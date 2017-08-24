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
        editMode: true
      }
    }
    
    incrementNum = () => { 
      this.checkIfEqual();
      this.setState({increment : this.state.increment + 1
      });
    }

    checkIfEqual = () => {
      //FIX THIS TOO HACKY
      if(this.state.num === this.state.increment + 1) {
        console.log("num equals count")
      }
    }

    handleUpdate = (event) => {

      if(event.keyCode === 13 || event.keyCode === 9){
        console.log(event.target.value)
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
            editMode: false
          });
        }
      }
    }
  
    render() {
      return (
          <table className="tile">
            <thead>
              <tr>
                <th scope="column"><TextFieldEditor text="+ Add a Habit" /></th>
                <th scope="column"></th>
                <th scope="column"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><NumFieldEditor 
                      num={this.state.num} 
                      handleUpdate={this.handleUpdate}
                      editMode={this.state.editMode}
                      onClick={this.handleClick}
                /></td>
              </tr>
              <tr>
                <td>Done It: {this.state.increment}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><button onClick={this.incrementNum} className="button">Did it!</button></td>
              </tr>
            </tfoot>
        </table>
      );
    }
  }

  export default HabitTracker;
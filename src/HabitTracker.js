import React, { Component } from 'react';
import NumFieldEditor from './NumFieldEditor';
import TextFieldEditor from './TextFieldEditor';
import './index.css';

 class HabitTracker extends Component {
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
          <table className="tile">
            <thead>
              <tr>
                <th scope="column"><TextFieldEditor/></th>
                <th scope="column"></th>
                <th scope="column"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><NumFieldEditor/></td>
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
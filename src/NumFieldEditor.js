import React from 'react';

const NumFieldEditor = (props)=> {
  return (
    <span>
        {props.editMode === true ? 
        <input type="text" onKeyDown={props.handleUpdate}></input> 
        :
        <span onClick={props.handleUpdate}> Goal: {props.num}</span>
      }
    </span>
  )
}

export default NumFieldEditor;
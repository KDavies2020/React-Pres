import React from 'react';
import Student from './Student.js';


 function Studentlist(props) {
  return (
    <div style={divPstyle}>
        <h1>Current Students</h1>
        <Student students={props.students} onClick={props.onClick}/>
     </div>
  )
}

const divPstyle = {
    border: '5px solid black',
    width: '500px',
    "marginleft": '50%',
  };

export default Studentlist;


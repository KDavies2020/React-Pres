import React from 'react'
import Popup from "reactjs-popup";

 function Student(props) {
  return (
    <div>
     {props.students.map(student=>{
    return (
     <div style={divStyle} onClick={props.onClick}>
     <Popup trigger={<p>{student.name}</p>} position="right center">
      <div>
        Full Name: {student.name} <br/>
        Age: {student.age} <br/>
        Location: {student.location}</div>
    </Popup>
     </div>
        )
    })}
    </div>
  )
}

const divStyle = {
    border: '3px solid pink',
    width: '300px',
    margin: "auto",
  };

  



export default Student;

import React, { Component } from 'react';
import './App.css';
import Studentlist from './studentList.js';
import Studentdata from './Studentdata.js';



 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    }
    this.onClickChangeColor = this.onClickChangeColor.bind(this);
  }
  //first event is loading the page. 

  componentDidMount() {
    this.setState({students: Studentdata})
  }

  //Where is this being used? 

onClickChangeColor (e) {
  e.target.style.color = 'red'
 
}
  render() {
    return (
      <div className="App">
      <Studentlist students={this.state.students} onClick = {this.onClickChangeColor}/>
      
      </div>
    )
  }
}


export default App;

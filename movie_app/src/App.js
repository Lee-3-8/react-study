
import React from "react";
import PropTypes from "prop-types"

class App extends React.Component{
  state = {
    count : 0
  };
  add =() =>{
    this.setState(current => ({count : this.state.count +1 }));
    //setState를 사용해야 자동으로 변화를 감지하고 새로고침한다 
  };
  minus =() =>{
    this.setState(current => ({count : this.state.count -1 }));
  };  
  render() { //리엑트는 자동적으로 render매소드를 시작함!!
    return (
      <div>
        <h1>Im a class {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div> 
    );
  }
}

export default App;


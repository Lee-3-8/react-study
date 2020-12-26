
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


/*
life cycle method!
component 가 render를 호출하고 컴포넌트가 업데이트될때 호출되는게 있다.
각각 메소드의 호출될때의 세부내용
1. mounting 
  - Constructor
  - getDerivedStateFromProps() -> 잘안씀
  - render!
  - componentDidMount
2. updating
  - getDerivedStateFromProps
  - shoul~
  ~~~
  - render
  - componentDidUpdate
3. unmounting -> 컴포넌트가 죽을때 (페이지가 바뀌는 등)
*/

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


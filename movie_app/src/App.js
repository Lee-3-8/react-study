
import React from "react";

function Food({fav}){ //  == props.fav
  return <h3> I love {fav}</h3> 
}



function App() {
  return(
  <div>
    <h1>"Hello!!!"</h1>
    <Food fav="kimchi"/>
    <Food fav="ramen"/>
    <Food fav="sma"/>
    <Food fav="ddfa"/>
    <Food fav="dfasd"/>
  </div>
  )
}

export default App;



import React from "react";
import PropTypes from "prop-types"

const CarILike = [
  {
    id: 1,
    name :"포르쉐 타이칸",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99E39D3C5D525D2E2E&f=1&nofb=1",
    rating : 5
  },
  {
    id: 2,    
    name :"제네시스 G80",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%253A%252F%252Ft1.daumcdn.net%252Fcfile%252Ftistory%252F9965894B5E85F7231F&f=1&nofb=1",
    rating : 4.9

  },
  {
    id: 3,    
    name :"밴츠 E클래스",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9b%2F2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg%2F1200px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg&f=1&nofb=1",
    rating : 3
  },
  {
    id: 4,
    name :"포르쉐 카이엔",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2148294E51A06DF628&f=1&nofb=1",
    rating : 3    
  }, 
  {
    id: 5,
    name :"아우디 A8",
    image : "https://t1.daumcdn.net/cfile/tistory/247A6A495373107E03",
    rating : 3

  }
  
]

function Car({name,picture,rating}){ //  == props.name
  return (
    <div>
      <h2> I love {name}</h2>
     <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  ); 
}

Car.propTypes = {//이름은 무조건 propTypes
  name : PropTypes.string, //string or undefined!! -> 없어도 애러는 안뜸
  picture : PropTypes.string,
  rating : PropTypes.number,
  //boolean, object 등등 많이 가능 


}
function App() { //컴포넌트는 대문자로 시작해야함
  return(
  <div>
    <h1>"Hello!!!"</h1>
    {CarILike.map(car => <Car key = {car.id} rating = {car.rating} name={car.name} picture = {car.image}/>)}
  </div>
  )
}

export default App;


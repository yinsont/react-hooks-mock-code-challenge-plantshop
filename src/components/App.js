import {React, useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  useEffect (() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  const [plants, setPlants] = useState ([])
  
  // console.log(plants)
  return (
    <div className="app">
      <Header />
      <PlantPage plants = {plants}/>
    </div>
  );
}

export default App;

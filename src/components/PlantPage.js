import {React, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants}) {

  const[newPlant, setNewPlant] = useState({})

  plants = [...plants, newPlant]

  return (
    <main>
      <NewPlantForm setNewPlant = {setNewPlant}/>
      <Search />
      <PlantList plants = {plants}/>
    </main>
  );
}

export default PlantPage;

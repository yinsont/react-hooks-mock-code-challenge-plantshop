import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  // console.log(plants)
  return (
    <ul className="cards">{plants.map((plant) => {
      return <PlantCard image = {plant.image} name = {plant.name} price = {plant.price}></PlantCard>
    })}</ul>
  );
}

export default PlantList;

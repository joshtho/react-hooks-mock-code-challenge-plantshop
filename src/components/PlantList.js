import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  
  const renderPlants = plants.map(singlePlant => 
  <PlantCard key={singlePlant.id} plant={singlePlant} /> )
  
  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;

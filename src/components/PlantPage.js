import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  function handleNewPlant(plantInfo) {
    setPlants(currentPlants => [...currentPlants, plantInfo])
  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(setPlants)
  }, [])

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;

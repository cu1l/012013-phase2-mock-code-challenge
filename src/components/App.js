import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [plantName, setPlantName] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then(setPlants)
  }, [])
  
  function onFormSubmit(newPlant) {
    const updatedPlants = plants.map((plant) =>
    plant.id === newPlant.id ? newPlant : plant
    )
    setPlants(updatedPlants)
  }

  const plantsToDisplay = plants
    .filter((plant) => plant.name.toLowerCase().includes(plantName.toLowerCase()));


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plantsToDisplay} onFormSubmit={onFormSubmit} plantName={plantName} setPlantName={setPlantName}/>
    </div>
  );
}

export default App;

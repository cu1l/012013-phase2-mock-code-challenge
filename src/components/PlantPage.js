import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onFormSubmit, setPlantName, plantName}) {
  return (
    <main>
      <NewPlantForm onFormSubmit={ onFormSubmit }/>
      <Search plantName={ plantName } setPlantName={setPlantName}/>
      <PlantList plants={ plants }/>
    </main>
  );
}

export default PlantPage;

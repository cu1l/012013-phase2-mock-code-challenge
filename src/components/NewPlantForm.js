import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {
  const [plantData, setPlantData] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleFormChange(e) {
    setPlantData({
      ...plantData,
      [e.target.name]: e.target.value,
    })
    console.log(plantData)
  }

  function onSubmit(e) {
    //PAGE WILL NOT UPDATE IF PREVENT DEFAULT IS USED I HAVE NO CLUE WHY
   // e.preventDefault();

    const newPlant = {
      ...plantData
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant),
    })
    .then((r) => r.json())
    .then(onFormSubmit)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={plantData.name} onChange={handleFormChange} placeholder="Plant name" />
        <input type="text" name="image" value={plantData.image} onChange={handleFormChange} placeholder="Image URL" />
        <input type="number" name="price" value={plantData.price} onChange={handleFormChange} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

import React from "react";

function Search({ plantName, setPlantName }) {
  function handleSearch(e) {
    console.log("searching...")
    setPlantName(e.target.value)
    //console.log(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={plantName}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;

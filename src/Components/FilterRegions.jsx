import React, { useState } from "react";

function FilterRegions({ countries, onFilterChange }) {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    onFilterChange(region);
  };

  return (
    <div className="filter-container">
      <select
        className="form-select"
        value={selectedRegion}
        onChange={handleRegionChange}
      >
        <option value="">Filter by Region</option>
        {Array.from(new Set(countries.map((country) => country.region))).map(
          (region) => (
            <option key={region} value={region}>
              {region}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default FilterRegions;

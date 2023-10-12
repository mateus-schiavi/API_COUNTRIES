import React from "react";
import PropTypes from "prop-types";
function FilterRegions({ countries, onFilterChange }) {
    const regions = Array.from(new Set(countries.map((country) => country.region)));

    const handleRegionChange = (event) => {
        const selectedRegion = event.target.value;
        onFilterChange(selectedRegion);
    };

    return (
        <div className="filter-regions">
            <label htmlFor="region-filter">Filtrar por Region:</label>
            <select id="region-filter" onChange={handleRegionChange}>
                <option value="">Todas las regiones</option>
                {regions.map((region, index) => (
                    <option key={index} value={region}>
                        {region}
                    </option>
                ))}
            </select>
        </div>
    );

}

FilterRegions.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            region: PropTypes.string,
        })
    ).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default FilterRegions;

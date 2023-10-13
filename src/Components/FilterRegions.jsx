import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function FilterRegions({ countries, onFilterChange }) {
    const [data, setData] = useState([]);
    const [continentFilter, setContinentFilter] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleContinentChange = (event) => {
        setContinentFilter(event.target.value);
        onFilterChange(event.target.value);
        setSelectedRegion(event.target.value);
    };

    return (
        <div className="filter-container">
            <select
                className="form-select"
                value={selectedRegion}
                onChange={handleContinentChange}
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
FilterRegions.propTypes = {
    countries: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default FilterRegions;

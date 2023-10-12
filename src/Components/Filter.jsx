import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filter() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((response) => {
            setCountries(response.data);
        });
    }, []);

    useEffect(() => {
        const filtered = countries.filter((country) => {
            return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredCountries(filtered);
    }, [searchTerm, countries]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Introduzca el nombre del país'
                onChange={handleSearch}
            />
            <ul>
                {filteredCountries.map((country) => (
                    <li key={country.cca3}>{country.name.common}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filter;

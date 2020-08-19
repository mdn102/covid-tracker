import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import useStats from '../utils/useStats';
import Stats from './Stats';

const Selector = styled.div`
    color: violet;
    font-weight: bold;
    text-align: center;
    margin: 20px;
    font-size: 30px;
`;


export default function CountrySelector() {
    const { stats: countries, loading, error } = useStats(
        'https://covid19.mathdro.id/api/countries'
    );
    const [selectedCountry, setSelectedCountry] = useState('USA');
    if (loading) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <Selector>
            <h1>Currently Showing {selectedCountry}</h1>
            <select
                onChange={e => {
                    setSelectedCountry(e.target.value);
                }}
            >
                {Object.entries(countries.countries).map(([country, code]) => (
                    <option
                        selected={selectedCountry === code.name}
                        key={country}
                        value={code.iso3}
                    >
                        {code.name}
                    </option>
                ))}
            </select>
            <Stats
                url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
            ></Stats>
        </Selector>
    );
}
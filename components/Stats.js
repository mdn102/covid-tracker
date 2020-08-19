import React from 'react';
import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin: 20px;
`;
const StatBlock = styled.div`
    color: white;
    font-size: 2rem;
    padding: 2rem;
    border-radius: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    margin: 30px;
`;

export default function Stats({ url }) {
    const { stats, loading, error } = useStats(url);
    console.log(stats, loading, error);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <StatGrid>
            <div className="confirmed">
                <StatBlock>
                    <h3 >Confirmed:</h3>
                    <span>{stats && stats.confirmed && stats.confirmed.value || 0}</span>
                </StatBlock>
            </div>
            <div className="deaths">
                <StatBlock>
                    <h3 >Deaths:</h3>
                    <span>{stats && stats.deaths && stats.deaths.value || 0 }</span>
                </StatBlock>
            </div>
            <div className="recovered">
                <StatBlock>
                    <h3 >Recovered:</h3>
                    <span>{stats && stats.recovered && stats.recovered.value || 0}</span>
                </StatBlock>
            </div>
            <style jsx>{`
                .confirmed {
                    background-color: orange;
                    border-radius: 2rem;
                    padding: 2rem;
                    margin: 30px;
                }
                .deaths {
                    background: red;
                    border-radius: 2rem;
                    padding: 2rem;
                    margin: 30px;
                }
                .recovered {
                    background: green;
                    border-radius: 2rem;
                    padding: 2rem;
                    margin: 30px;
                }
            `}</style>
        </StatGrid>
    );
}
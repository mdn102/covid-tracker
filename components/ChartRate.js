import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from './Stats';
import useStats from '../utils/useStats';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';


const  ChartRate = () => {
    const endpoint = 'https://covid19.mathdro.id/api/daily'
    const { stats, loading, error } = useStats(endpoint)
    if (loading) {
        return <div>Loading ...</div>
    }

    console.log(stats)

    return (
        <div style={{ textAlign: 'center', color: 'red' }}>
            <h1>Confirmed Cases Chart</h1>
            <ComposedChart
                width={1200}
                height={600}
                data={stats}
                margin={{
                    top: 20,
                    right: 100,
                    bottom: 20,
                    left: 100
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="reportDateString" />
                <YAxis label={{ value: 'Cases', angle: -90, position: 'insideLeft' }} />
                <Tooltip />

                <Area
                    type="monotone"
                    dataKey="totalConfirmed"
                    fill="#8884d8"
                    stroke="#8884d8"
                />
                <Bar dataKey="totalConfirmed" barSize={50} fill="#413ea0" />
                <Line type="monotone" dataKey="totalConfirmed" stroke="#ff7300" />
            </ComposedChart>
        </div>
    )
};

export default ChartRate;


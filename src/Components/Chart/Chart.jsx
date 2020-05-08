import React, { useState, useEffect, } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        console.log(dailyData);
        fetchMyAPI();

    });

    const lineChart = (
        dailyData[0]
            ? (
                <Line
                    data={{
                        labels: '',
                        datasets: [{}, {}],
                    }}
                />
            ) : null)
        ;

    return (
        <h1></h1>
    )
}

export default Chart;
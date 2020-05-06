import React, { Component } from 'react';
import styles from './App.module.css'
import { Cards, CountryPicker, Chart } from './Components';
import { fetchData } from './api';


class App extends Component {

    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

    render() {
        return (
            <div className={styles.container}>
                <Chart />
                <CountryPicker />
                <Cards />
            </div>
        );
    }
}

export default App;
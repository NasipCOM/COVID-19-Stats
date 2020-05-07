import React, { Component } from 'react';
import styles from './App.module.css'
import { Cards, CountryPicker, Chart } from './Components';
import { fetchData } from './api';


class App extends Component {
    state = {
        data:{},
    }
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
        this.setState({data:fetchData})
    }

    render() {
        const {data} = this.state;

        return (
            <div className={styles.container}>
                <Chart />
                <CountryPicker />
                <Cards data={data}/>
            </div>
        );
    }
}

export default App;
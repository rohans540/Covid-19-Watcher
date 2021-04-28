import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({ data: data, country: country });
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data: data });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker onChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
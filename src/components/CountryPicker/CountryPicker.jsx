import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { countries } from '../../api';

const CountryPicker = ({ onChange }) => {

    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setCountriesData(await countries())
        }

        fetchCountries();
    }, [setCountriesData]);

    console.log(countriesData);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => onChange(e.target.value)}>
                <option value="global">Global</option>
                {countriesData.map((country, i) => <option value={country} key={`${country}-${i}`}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;
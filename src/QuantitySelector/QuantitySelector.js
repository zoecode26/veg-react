import React, { Component } from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styles from './QuantitySelector.module.css';

class QuantitySelector extends Component { 
    render() {
        const handleChange = (event) => {};
        return (
            <FormControl size="small" className={styles.dropdown} renderValue={"hello"}>
                <InputLabel id="demo-simple-select-label"> Quantity</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                    label="Quantity">
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default QuantitySelector;

import React, { Component } from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styles from './QuantitySelector.module.css';

class QuantitySelector extends Component { 
    render() {
        const handleChange = (event) => {
            sessionStorage.setItem("quantity", event.target.value);
        };
        return (
            <FormControl size="small" className={styles.dropdown} renderValue={"hello"}>
                <InputLabel> Quantity</InputLabel>
                <Select
                    onChange={handleChange}
                    defaultValue= {1} 
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

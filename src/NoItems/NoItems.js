import React, { Component } from "react";
import styles from './NoItems.module.css';
import { Grid } from "@material-ui/core";

class NoItems extends Component {    
  render() {
    return (
        <Grid
        container
        alignItems="center"
        justifyContent="center">

        <Grid item xs={12} lg={8}>
          <div className={styles.item}>
            <h2> No items in cart </h2>
          </div>
        </Grid>   
      </Grid>
    );
  }
}
 
export default NoItems;
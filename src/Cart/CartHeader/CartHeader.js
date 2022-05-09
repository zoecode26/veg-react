import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class CartHeader extends Component {    
  render() {
    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center">
          <Grid item xs={12} md={8}>
            <div>
                <h1> Cart </h1>
            </div>
          </Grid>
        </Grid>
    );
  }
}
 
export default CartHeader;
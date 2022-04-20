import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from './Header.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { CssBaseline } from "@mui/material";
  
export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>  
        <div className={styles.container}>
            <ShoppingCartIcon className={styles.firstIcon}/>
            <Typography variant="h4" className = {styles.heading}>
              VeggieBox
            </Typography>
            <Link to={"/cart/"} style={{ textDecoration: 'none', color: 'white' }}>
              <ShoppingCartIcon fontSize="large" className={styles.secondIcon}/>
            </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
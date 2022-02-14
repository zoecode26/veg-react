import * as React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from './Header.module.css';
  
export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>  
        <Typography variant="h4" className = {styles.heading}>
          VeggieBox
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
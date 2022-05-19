import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styles from './Header.module.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar className={styles.toolbar}>
                <Typography variant="h4">
                    <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}>
                        VeggieBox
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
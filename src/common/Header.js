import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import Baseline from "./Baseline";

export default function Navbar() {
    return (
        <AppBar position="static">
            <Baseline />
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
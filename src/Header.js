import * as React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
  
export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar style={{backgroundColor: "#133A1B" , minHeight: "75px"}}>  
          <Typography variant="h4" 
            component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            VeggieBox
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
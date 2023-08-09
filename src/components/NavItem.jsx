import React from "react";
import { Link } from "react-router-dom";
import { Grid,Button } from "@mui/material";

export  const NavItem=({item})=>{
    return(

        <Grid item xs={item.xs}>
            <Link to={item.path}>
                <Button variant="contained" fullWidth color="success">{item.title}</Button>
            </Link>
        </Grid>

    )
}
import React,{useState,useEffect} from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { NavItem } from "./NavItem";

export const Nav=()=>{
    const [data,setData] = useState([])
    const getData = async()=>{
        const result =await axios.get("http://localhost:1010/navs")
        setData(result.data)
    }
    useEffect(()=>{
       getData()
    },[])
    return(
        <Grid container spacing={2} sx={{marginBottom:3}}>
         {
            data.map((item)=>
                <NavItem item={item}/>
                )
         }  
        </Grid>
    )
}
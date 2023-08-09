import React, {useState,useEffect} from "react";
import { Grid } from "@mui/material";
import axios from "axios";

export const Home=()=>{
    const [data,setData] = useState([])
    const getData=async()=>{
        const result =await axios.get("http://localhost:1010/docs")
        setData(result.data)
    }
    useEffect(()=>{
          getData()
    },[])
    return(

        <Grid container spacing={2}>
            {
                data.map((item)=>
                <Grid item xs={6}>
                 <h3>{item.name}</h3>
                 <h5>Specialization : {item.spl}</h5>
                </Grid>
                )
            }
        </Grid>
    )
}
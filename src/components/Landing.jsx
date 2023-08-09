import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { AddDoctor } from "./AddDoctor";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/adddoctor" element={<AddDoctor/>} />
            <Route />
            <Route />
        </Routes>
        </BrowserRouter>
    )
}
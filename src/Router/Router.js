import React from "react";
import Home from "../views/Home";
import Task from "../views/Task";
import { Route, Routes } from "react-router-dom";

function Routers (){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/task" element={<Task></Task>}></Route>

        </Routes>
    )

}
export default Routers
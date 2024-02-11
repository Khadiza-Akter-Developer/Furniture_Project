import React from "react";
import {Routes, Route} from 'react-router'

const Rout = () => {
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
        </>
    )
}
export default Rout;
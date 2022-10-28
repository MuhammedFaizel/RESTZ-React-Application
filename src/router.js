import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Pages/Login/Login" 
import StickyFooter from "./components/Pages/Footer/Footer";
import Navbar from "./components/Pages/Home/Appbar";
import Countries from "./components/Pages/Home/Countries";

const logged = localStorage.getItem("isLoggedIn");
const AppRouter = () => {
    const [loggedIn, setLoggedIn] = useState(logged ? true : false)
    if (!loggedIn) {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
                    <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </>
        )
    }

    return (
        <>
        <Navbar setLoggedIn={setLoggedIn}/>
                    <Routes>
                        <Route path="/" element={<Countries setLoggedIn={setLoggedIn}/>} />
                        <Route path="/countries" element={<Countries setLoggedIn={setLoggedIn}/>} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <StickyFooter />
        </>
    );
}

export default AppRouter;

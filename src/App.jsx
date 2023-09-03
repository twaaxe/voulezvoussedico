import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AboutUs from "./components/AboutUs";
import Contact from './components/Contact';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
    return (
        <>
            {/* <BrowserRouter basename="/app">
                <Routes>
                    <Route path="/home" element={Home} />
                    <Route path="/contact" element={Contact} />
                    <Route path="/aboutus" element={AboutUs} />
                </Routes>
            </BrowserRouter> */}
            <Header />
            <Home />
            <AboutUs />
            <Contact />

            <Footer />
        </>

    );
}

export default App;

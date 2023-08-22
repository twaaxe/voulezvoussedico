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
            {/* <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="aboutUs" element={<AboutUs />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter> */}
            <Header />
            <Home />
        </>

    );
}

export default App;

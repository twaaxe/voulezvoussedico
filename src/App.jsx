import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AboutUs from "./components/AboutUs";
import Contact from './components/Contact';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <>


            <Header />
            <Home />
            <AboutUs />
            <Contact />
            <Footer />
        </>

    );
}

export default App;

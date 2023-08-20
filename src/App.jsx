import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Adress from "./components/Adress";
import Contact from './components/Contact';
import Home from "./components/Home";
import Header from "./components/Header";

import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="Adress" element={<Adress />} />
                <Route path="Contact" element={<Contact />} />

            </Routes>
        </BrowserRouter>

    );
}

export default App;

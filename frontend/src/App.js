import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./components/Layout";

import Home from './components/Home'
import Servicios from './components/Servicios'
import Asociarse from './components/Asociarse'
import Contacto from './components/Contacto'
import Pqrs from './components/Pqrs'
//import Navigation from './components/Navigation'

export default function App() {
    return ( 
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="servicios" element={<Servicios />} />
                <Route path="asociarse" element={<Asociarse />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="pqrs" element={<Pqrs />} />
                </Route>
            </Routes>
        </BrowserRouter>

        </div>  
    );
    
}


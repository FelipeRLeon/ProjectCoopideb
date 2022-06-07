import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./components/Layout";

import Home from './components/Home'
import Cooperativa from './components/Cooperativa'
import Servicios from './components/Servicios'
//import Asociarse from './components/Asociarse'
import Contacto from './components/Contacto'
import Pqrfs from './components/Pqrfs'
import Estructura from './components/Estructura'

export default function App() {
    return ( 
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="cooperativa" element={<Cooperativa />} />
                <Route path="servicios" element={<Servicios />} />
                {/*<Route path="asociarse" element={<Asociarse />} />*/}
                <Route path="contacto" element={<Contacto />} />
                <Route path="pqrfs" element={<Pqrfs />} />
                <Route path="estructura" element={<Estructura />} />
                </Route>
            </Routes>
        </BrowserRouter>

        </div>  
    );
    
}


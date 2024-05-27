import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../../pages/Home';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';


const App = () => {
    return (
        <BrowserRouter basename="/Portfolio">
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>                
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/Skills" element={<Skills/>}/> 
            </Routes>
        <Footer/>
        </BrowserRouter>
    );
};

export default App;
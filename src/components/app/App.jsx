import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../../pages/Home';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';


const App = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>                
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/Skills" element={<Skills/>}/> 
                <Route path="/Contact" element={<Contact/>}/>  
            </Routes>
        <Footer/>
        </BrowserRouter>
    );
};

export default App;
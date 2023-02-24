import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from '../composant/Home';
import ListeClients from '../composant/ListeClients';
import Navigation from '../composant/Navigation';

const Index = () => {
    console.log("hello")
    return (
       <h1>route en attente</h1>
    );
};

export default Index;
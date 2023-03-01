import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from '../composant/Home';
import ListeClients from '../composant/ListeClients';
import Navigation from '../composant/Navigation';

const Index = () => {
    console.log("hello")
    return (
        <Router>
        <Navigation>
            <Routes>
                <Route path="/"  exact  element={<Home/>}/>
                <Route path="/listeClients" element ={<ListeClients/>} />
                <Route path="/listeCommandes" />
            </Routes>
        </Navigation>
    </Router>
      
    );
};

export default Index;
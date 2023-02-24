import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from '../composant/Home';
import ListeClients from '../composant/ListeClients';
import Navigation from '../composant/Navigation';

const Index = () => {
    console.log("hello")
    return (
<<<<<<< HEAD
        <Router>
        <Navigation>
            <Routes>
                <Route path="/"  exact  element={<Home/>}/>
                <Route path="/listeClients" element ={<ListeClients/>} />
                <Route path="/listeCommandes" />
            </Routes>
        </Navigation>
    </Router>
=======
       <h1>route en attente</h1>
>>>>>>> a1e79d403435afde6b149d46075a707a5353166c
    );
};

export default Index;
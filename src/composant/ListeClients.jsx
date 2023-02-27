import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const ListeClients = () => {
  const [client, setClient] = useState([]);
  const [liscli, setLiscli] = useState(true);
  const [commandeCli, setCommandeCli] = useState([]);
  
  
  const navigate = useNavigate()
  const afficheClient = () => {
    axios
      .get("http://localhost:8000/client?page=1")
      .then((resp) => 
      setClient(resp.data.response),
      setLiscli(true)
      );
  };

  const commandeClient =(codecli) =>{
    axios
    .get("http://localhost:8000/commande/client/"+codecli)
    .then((resp)=> setCommandeCli( resp.data.response),
          
          setLiscli(false)
    )
  }

  const detailCommande = () =>{

  }

  const AjouterCommande = () =>{

  }

  console.log(commandeCli)
  if(liscli){return (
    <div>
      
      <button onClick={afficheClient}>liste client</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Adresse</th>
            <th scope="col">Ville</th>
            <th scope="col">CodePostale</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
            {client.map((valeur)=>(
                   <tr key={valeur.codcli}>
                   <th scope="row">{valeur.codcli}</th>
                   <td >{valeur.nomcli}</td>
                   <td>{valeur.prenomcli}</td>
                   <td>{valeur.adresse1cli}</td>
                   <td>{valeur.villecli}</td>
                   <td>{valeur.cpcli}</td>
                   <td>{valeur.emailcli}</td>
                   <td >
                    <button onClick={()=>(commandeClient(valeur.codcli))}>commande associer</button>
                   </td>
                 </tr>
            ))}
        </tbody>
      </table>
    </div>
  );}
  return(
    <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">date commande</th>
        <th scope="col">Nbr de colis</th>
        
      </tr>
    </thead>
    <tbody>
        {commandeCli.map((valeur)=>(
               <tr>
               <th key={valeur.codcli_id} scope="row">{valeur.id}</th>
            
               <td>{valeur.datcde}</td>
               <td>{valeur.nbcolis}</td>
               <td >
                <button className="btn btn-success" onClick={()=>(detailCommande())}>detaille commande</button>
                <button  className= "btn btn-primary" onClick={()=>(AjouterCommande())}>Ajouter commande</button>
               </td>
             </tr>
        ))}
    </tbody>
  </table>
  
    )
  
};

export default ListeClients;

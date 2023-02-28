import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const ListeClients = () => {
  const [client, setClient] = useState([]);
  const [liscli, setLiscli] = useState(true);
  const [commandeCli, setCommandeCli] = useState([]);
  const [detailCde, setdetailCde] = useState(false);
  const [listDetailCde, setlistDetailCde] = useState([]);
  const [listObjet, setlistObjet] = useState([]);
  
  
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
          
          setLiscli(false),
          
    )
  }
  const listObjetCommande = (idObjet) =>{
    axios
      .get("http://localhost:8000/produit?page=1")
      .then((resp)=>{
        console.log("reso",resp)
        let tabObj=resp.data.response
        tabObj= tabObj.filter((dataObj)=>dataObj.codobj===idObjet)
        setlistObjet(tabObj)
        console.log(listObjet)
      
      })

  }


  const listdetailCommande = (codecde) =>{
    axios
    .get("http://localhost:8000/commande/detail")
    .then((resp)=>{
      let tab=resp.data.response
      tab=tab.filter((data)=>data.codcde===codecde)
      setlistDetailCde(tab)
      listObjetCommande(tab.codobj_id)
          })
  }

  const AjouterCommande = () =>{

  }

  //liste client
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
                    <button onClick={()=>(commandeClient(valeur.codcli))}>commande associée</button>
                   </td>
                 </tr>
            ))}
        </tbody>
      </table>
    </div>
  );}
  //entete de commende concernat un client
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
               <th key={valeur.codcli_id} scope="row">{valeur.codcli_id}</th>
               <td>{valeur.datcde}</td>
               <td>{valeur.nbcolis}</td>
               <td >
                <button className="btn btn-success" onClick={()=>(listdetailCommande(valeur.codcde))}>detaille commande</button>
                <button  className= "btn btn-primary" onClick={()=>(AjouterCommande())}>Ajouter commande</button>
               </td>
                {listDetailCde.map((detail)=>(
                  <li>{detail.codobj}</li>
                ))}
               <li>
              
               </li>
             </tr>
        ))}
    </tbody>
  </table>
  
    )
   
  
};

export default ListeClients;

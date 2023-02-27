import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ListeClients = () => {
  const [client, setClient] = useState([]);

  const afficheClient = () => {
    axios
      .get("http://localhost:8000/client?page=1")
      .then((resp) => setClient(resp.data.response));
  };
  return (
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
                 </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeClients;

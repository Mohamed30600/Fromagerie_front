import React from "react";
import axios from "axios";
import { useState } from "react";

const ListeClients = () => {
  const [client, setClient] = useState([]);
  const [liscli, setLiscli] = useState(true);
  const [commandeCli, setCommandeCli] = useState([]);
  const [listDetailCde, setlistDetailCde] = useState([]);

  const afficheClient = () => {
    axios
      .get("http://localhost:8000/client?page=1")
      .then((resp) => setClient(resp.data.response), setLiscli(true));
  };

  const commandeClient = (codecli) => {
    axios
      .get("http://localhost:8000/commande/client/" + codecli)
      .then((resp) => setCommandeCli(resp.data.response), setLiscli(false),);

  };
console.log(commandeCli)
  // const listdetailCommande = (codecde) => {
  //   axios.get("http://localhost:8000/commande/detail").then((resp) => {
  //     let tab = resp.data.response;
  //     tab = tab.filter((data) => data.codcde === codecde);
  //     setlistDetailCde(tab);

  //     console.log(codecde);
  //   });
  // };

 

  //liste client
  if (liscli) {
    return (
      <div>
        <button
          type="button"
          class="btn btn-success btn-sm mb-2"
          onClick={afficheClient}
        >
          Voir la liste des clients
        </button>
        <table className="table table-striped">
          <thead>
            <tr class="table">
              <th scope="col">Id</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Adresse</th>
              <th scope="col">Ville</th>
              <th scope="col">Code postal</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {client.map((valeur) => (
              <tr key={valeur.codcli}>
                <th scope="row">{valeur.codcli}</th>
                <td>{valeur.nomcli}</td>
                <td>{valeur.prenomcli}</td>
                <td>{valeur.adresse1cli}</td>
                <td>{valeur.villecli}</td>
                <td>{valeur.cpcli}</td>
                <td>{valeur.emailcli}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm mb-2"
                    onClick={() => commandeClient(valeur.codcli)}
                  >
                    Commande associée
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  //entete de commende concernat un client
  return (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">#idClient</th>
          <th scope="col">#idCommande</th>
          <th scope="col">date commande</th>
        </tr>
      </thead>
      <tbody>
        {commandeCli.map((commande) => (
          <>
            <tr>
              <th key={commande.codcli_id} scope="row">
                {commande.codcli_id}
              </th>
              <td>{commande.codcde}</td>
              <td>{commande.datcde}</td>
              <td>
                <button>Ajouter produit</button>
              </td>
            </tr>
            <tr>
              
              <table className="table">
         
                  <thead>
                    <th>Nom Produit</th>
                    <th>Quantité</th>
                  </thead>
               
              <tbody>
              {commande.details.map((detailCommand)=>(
                <tr>
                  <td>{detailCommand.produit.libobj}</td>
                  <td>{detailCommand.qte}</td>
                  <td><button>supression</button></td>
                  </tr>
              ))}
              </tbody>
              </table>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default ListeClients;

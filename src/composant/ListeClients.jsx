import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListeClients = () => {
  const [client, setClient] = useState([]);
  const [liscli, setLiscli] = useState(true);
  const [commandeCli, setCommandeCli] = useState([]);
  const [listDetailCde, setlistDetailCde] = useState([]);
  const [datecde, setDatecde] = useState("2023-11-16");
  const [timbrecli, setTimbrecli] = useState(0);
  const [timbrecde, setTimbrecde] = useState(0);
  const [nbcolis, setnbcolis] = useState(0);
  const [cheqcli, setcheqcli] = useState(0);
  const [idcondit, setidcondit] = useState(26);
  const [cdecomt, setCdecomt] = useState(0git );
  const [barchive, setBarchive] = useState(0);
  const [bstock, setBstock] = useState(false);
  const [formCommande, setformCommande] = useState(false);
  const [formProduit, setFormProduit] = useState(false);
  const [codcde, setcodcde] = useState("");
  const [codobj_id, setcodobj_id] = useState("");
  const [qte, setqte] = useState("");
  const [colis, setColis] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [id_dtl_commande_id, setid_dtl_commande_id] = useState(6149);
  const [codecli_id, setcodecli_id] = useState(0);

  let navigate = useNavigate("");

  let commande = {
    datecde,
    codecli_id,
    timbrecli,
    timbrecde,
    nbcolis,
    cheqcli,
    idcondit,
    cdecomt,
    barchive,
    bstock,
    id_dtl_commande_id,
  };
  let detailCommande = { codcde, codobj_id, qte, colis, commentaire };

  const afficheClient = () => {
    axios
      .get("http://localhost:8000/client?page=3")
      .then((resp) => setClient(resp.data.response), setLiscli(true));
  };

  const commandeClient = (codecli) => {
    axios
      .get("http://localhost:8000/commande/client/" + codecli)
      .then((resp) => setCommandeCli(resp.data.response), setLiscli(false));
  };

  const deleteCommande = (idDtlCommande) => {
    axios
      .delete("http://localhost:8000/commande/detail/" + idDtlCommande)
      .then((resp) => console.log(resp));
  };

  const AjouterCommande = (commande,e) => {
    e.preventDefault(false)
    axios
      .post("http://localhost:8000/commande", commande)
      .then((resp) => console.log("hello"));
  };

console.log("commande",commande)
  const ajouterProduit = (detailCommande) => {
    axios
      .post("http://localhost:8000/commande/detail", detailCommande)
      .then((res) => {
        navigate("/");
        alert("produit ajouté");
      });
  };

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
                    onClick={() => {
                      commandeClient(valeur.codcli);
                      setcodecli_id(valeur.codcli);
                    }}
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
  //formulaire ajouter commande
  if (formCommande) {
    return (
      <form>
        <div className="form-group">
          <label>timbrecli:</label>
          <input
            type="text"
            name="timbrecli"
            onChange={(e) => setTimbrecli(e.target.value)}
          />
          <label>timbrecde:</label>
          <input
            type="text"
            name="timbrecde"
            onChange={(e) => setTimbrecde(e.target.value)}
          />
          <label>nbcolis:</label>
          <input
            type="text"
            name="nbcolis"
            onChange={(e) => setnbcolis(e.target.value)}
          />
          <label>cheqcli:</label>
          <input
            type="text"
            name="cheqcli"
            onChange={(e) => setcheqcli(e.target.value)}
          />
          <label>cdecomt:</label>
          <input
            type="text"
            name="cdecomt"
            onChange={(e) => setCdecomt(e.target.value)}
          />
          <label>barchive:</label>
          <input
            type="checkbox"
            name="barchive"
            onChange={(e) => setBarchive(e.target.value)}
          />
          <label>bstock:</label>
          <input
            type="checkbox"
            name="bstock"
            onChange={(e) => setBstock(e.target.value)}
          />
          <button
            className="btn btn-success"
            onClick={() => AjouterCommande(commande)}
          >
            valider
          </button>
        </div>
        <h1>ajouter commande</h1>
      </form>
    );
  }
  if (formProduit) {
    return (
      <form>
        <div className="form-group">
          <label>idProduit:</label>
          <input
            type="text"
            name="idProduit"
            onChange={(e) => setcodobj_id(e.target.value)}
          />
          <label>qte:</label>
          <input
            type="text"
            name="qte"
            onChange={(e) => setqte(e.target.value)}
          />
          <label>colis:</label>
          <input
            type="text"
            name="colis"
            onChange={(e) => setColis(e.target.value)}
          />
          <label>commentaire:</label>
          <input
            type="text"
            name="commentaire"
            onChange={(e) => setnbcolis(e.target.value)}
          />
          <button
            onClick={() => {
              ajouterProduit(detailCommande);
              setFormProduit(false);
            }}
          >
            valider
          </button>
        </div>
        <h1>ajouter commande</h1>
      </form>
    );
  }

  //entete de commende concernat un client
  return (
    <>
      <button onClick={() => setformCommande(true)}>ajouter Commande</button>
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
                  <button
                    onClick={() => {
                      setFormProduit(true);
                      setcodcde(commande.codcde);
                    }}
                  >
                    Ajouter produit
                  </button>
                </td>
                <td>suprimer commannde</td>
              </tr>
              <tr>
                <table className="table">
                  <thead>
                    <th>Nom Produit</th>
                    <th>Quantité</th>
                  </thead>

                  <tbody>
                    {commande.details.map((detailCommand) => (
                      <tr>
                        <td>{detailCommand.produit.libobj}</td>
                        <td>{detailCommand.qte}</td>
                        <td>{detailCommand.id_dtl_commande}</td>
                        <td>
                          <button>supression</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListeClients;

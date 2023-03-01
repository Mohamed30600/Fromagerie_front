import React from 'react';

const CommandeClient = () => {
    const [listDetailCde, setlistDetailCde] = useState([]);
    const [commandeCli, setCommandeCli] = useState([]);
    const detailCommande = () =>{
        axios
        .get("http://localhost:8000/commande/detail")
        .then((resp)=>setlistDetailCde(resp.data.response))
        setdetailCde(true)
    
      }
    return (
        <div>
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
                <button className="btn btn-success" onClick={()=>(detailCommande())}>detaille commande</button>
                <button  className= "btn btn-primary" onClick={()=>(AjouterCommande())}>Ajouter commande</button>
               </td>
             </tr>
        ))}
    </tbody>
  </table>
        </div>
    );
};

export default CommandeClient;
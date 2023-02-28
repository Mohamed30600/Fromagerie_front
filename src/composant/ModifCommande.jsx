import React from "react";

const ModifCommande = () => {
    return (
        <div>
            <tr>
                <td>
                    <input type="text" name="nom" />
                </td>
                <td>
                    <input type="text" name="prenom" />
                </td>
                <td>
                    <input type="text" name="adresse" />
                </td>
                <td>
                    <input type="text" name="codePostale" />
                </td>
                <td>
                    <input type="number" name="age" />
                </td>
                <td><button type='submit'></button></td>
            </tr>
        </div>
    );
};

export default ModifCommande;
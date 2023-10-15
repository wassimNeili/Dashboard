import React, { useState } from 'react';
import './Formbanques.css';
import { Link } from 'react-router-dom';

function Formbanques() {
  const [entreprise, setEntreprise] = useState({
    nom: '',
    codeBCT: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntreprise({ ...entreprise, [name]: value });
  };

  const saveEntreprise = (e) => {
    e.preventDefault();
    console.log('entreprise Data:', entreprise);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="h4">Nouvelle banque</h4>
              <Link to="/banques" className="btn btn-primary">
              Retour
              </Link>
            </div>
            <div className="card-body">
              <form onSubmit={saveEntreprise}>
                <div className="mb-3">
                  <label>Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={entreprise.nom}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Code BCT</label>
                  <input
                    type="text"
                    name="codeBCT"
                    value={entreprise.codeBCT}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Valider
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formbanques;

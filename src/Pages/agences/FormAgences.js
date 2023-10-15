import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormAgences.css';

function FormAgences() {
  const [formData, setFormData] = useState({
    nom: '',
    region: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveData = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="h4">Nouveau Agences</h4>
              <Link to="/agences" className="btn btn-primary">
              retour
                </Link>
            </div>
            <div className="card-body">
              <form onSubmit={saveData}>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>Nom</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>Region</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                  valider
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

export default FormAgences;

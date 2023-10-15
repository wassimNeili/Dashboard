import React, { useState, useEffect } from 'react';
import './FormEntreprises.css';
import { Link } from 'react-router-dom';
import AxiosService from '../../service/AxiosService';

function FormEntreprises() {
  const [entreprise, setEntreprise] = useState({
    nom: '',
    type: '',
    intermediaireAgree: '',
  });

  const [intermediaireAgreeName, setIntermediaireAgreeName] = useState('');
  const [intermediaireAgreeOptions, setIntermediaireAgreeOptions] = useState([]);

  useEffect(() => {
    const axiosService = new AxiosService();
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    };

    const intermediaireAgreeUrl = 'http://197.14.56.60:8445/api/companies?type=BANK';

    axiosService
      .get(intermediaireAgreeUrl, { headers })
      .then((response) => {
        setIntermediaireAgreeOptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching intermediaire agrée options:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntreprise({ ...entreprise, [name]: value });
  };

  const saveEntreprise = (e) => {
    e.preventDefault();

    const axiosService = new AxiosService();
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    };

    const selectedOption = intermediaireAgreeOptions.find((option) => option.name === intermediaireAgreeName);

    const newCompanyData = {
      name: entreprise.nom,
      type: entreprise.type,
      bank: selectedOption ? selectedOption.id : null,
    };

    axiosService
      .create('/companies/create', newCompanyData, { headers })
      .then((response) => {
        console.log('New company added:', response.data);
      })
      .catch((error) => {
        console.error('Error adding company:', error);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="pathf">
            <Link to="/Entreprises">
              <span className="customText">Entreprises</span>
            </Link>
            &nbsp;&nbsp;
            <span>&gt; </span>
            <Link to="/Entreprises/formEntreprises">
              <span className="customText">Entreprises Liste</span>
            </Link>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="h4">Nouvelle entreprise</h4>
              <Link to="/Entreprises" className="btn btn-primary">
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
                  <label>Type</label>
                  <select
                    name="type"
                    value={entreprise.type}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">Sélectionnez le type</option>
                    <option value="EX_BOX">Bureaux De Change</option>
                    <option value="BANK">Banques</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Intermediaire Agrée</label>
                  <select
                    name="intermediaireAgree"
                    value={intermediaireAgreeName}
                    onChange={(e) => setIntermediaireAgreeName(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Sélectionnez l'intermédiaire agréé</option>
                    {intermediaireAgreeOptions.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
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

export default FormEntreprises;

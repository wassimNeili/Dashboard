import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormBureau.css';

function FormEntreprises() {
  const [companyInfo, setCompanyInfo] = useState({
    nom: '',
    logo: '',
    identifiantBureau: '',
    adresseBureau: '',
    company: '',
  });

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    adresse: '',
    cin: '',
  });

  const handleCompanyInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const saveData = (e) => {
    e.preventDefault();

    console.log('Company Info:', companyInfo);
    console.log('User Info:', userInfo);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="h4">Nouveau Bureau de Change</h4>
              <Link to="/bureauxdechange" className="btn btn-primary">
              Rretour
                </Link>
            </div>
            <div className="card-body">
              <form onSubmit={saveData}>
                
                <div className="mb-4 row">
                  <div className="col-md-4">
                    <label>Nom</label>
                 
                    <input
                      type="text"
                      name="nom"
                      value={companyInfo.nom}
                      onChange={handleCompanyInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Logo (Choose File)</label>
                  
                    <input
                      type="file"
                      name="logo"
                      value={companyInfo.logo}
                      onChange={handleCompanyInputChange}
                      className="form-control"
                    />
                  </div>
                
                  <div className="col-md-4">
                    <label>Identifiant du bureau de charge</label>
                  
                    <input
                      type="text"
                      name="identifiantBureau"
                      value={companyInfo.identifiantBureau}
                      onChange={handleCompanyInputChange}
                      className="form-control"
                    />
                 </div>
                 
                </div>
                
                <div className="mb-4 row">
                <div className="col-md-4">
                    <label>Adresse du bureau de change</label>
                    <input
                      type="text"
                      name="adresseBureau"
                      value={companyInfo.adresseBureau}
                      onChange={handleCompanyInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Company</label>
                    <select name="company"
                     value={companyInfo.company}
                    onChange={handleCompanyInputChange}
                    className="form-control"
                     >
                       <option value="">Select a Company</option>
                     <option value="Company A">bureau de change</option>
                    <option value="Company B">banque</option>
                     </select>
                  </div>
                  <div className="col-md-4">
                    <label>Telephone</label>
                    <input
                      type="text"
                      name="adresseBureau"
                      value={companyInfo.adresseBureau}
                      onChange={handleCompanyInputChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h5>Utilisateur principal</h5>
                </div>
                <div className="mb-4 row">
                  <div className="col-md-4">
                    <label>Username</label>
                  
                    <input
                      type="text"
                      name="username"
                      value={userInfo.username}
                      onChange={handleUserInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Mot de passe</label>
                  
                    <input
                      type="password"
                      name="password"
                      value={userInfo.password}
                      onChange={handleUserInputChange}
                      className="form-control"
                    />
                  </div>
                
                
                  <div className="col-md-4">
                    <label>Firstname</label>
                  
                    <input
                      type="text"
                      name="firstname"
                      value={userInfo.firstname}
                      onChange={handleUserInputChange}
                      className="form-control"
                    />
                  </div>
                  
                </div>
                <div className="mb-4 row">
                <div className="col-md-4">
                    <label>Lastname</label>
                  
                    <input
                      type="text"
                      name="lastname"
                      value={userInfo.lastname}
                      onChange={handleUserInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Email</label>
                 
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleUserInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Telephone</label>
                  
                    <input
                      type="text"
                      name="telephone"
                      value={userInfo.telephone}
                      onChange={handleUserInputChange}
                      className="form-control"
                    />
                  </div>
                  </div>
                  <div className="mb-4 row">
                  <div className="col-md-4">
                    <label>Adresse</label>
                  
                    <input
                      type="text"
                      name="adresse"
                      value={userInfo.adresse}
                      onChange={handleUserInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>CIN</label>
                 
                    <input
                      type="text"
                      name="cin"
                      value={userInfo.cin}
                      onChange={handleUserInputChange}
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

export default FormEntreprises;

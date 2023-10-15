import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormRole.css';

function FormRole() {
  const [formData, setFormData] = useState({
    code: '',
    table: '',
    categorie: '',
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
              <h4 className="h4">Nouveau role</h4>
              <Link to="/role" className="btn btn-primary">
              Retour
                </Link>
            </div>
            <div className="card-body">
              <form onSubmit={saveData}>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>Code</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="code"
                      value={formData.code}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>label</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="table"
                      value={formData.table}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>Categorie</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="categorie"
                      value={formData.categorie}
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

export default FormRole;

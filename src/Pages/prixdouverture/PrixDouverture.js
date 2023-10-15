import React, { useState, useEffect } from 'react';


function PrixDouverture() {
  const [deviseOptions, setDeviseOptions] = useState([]);
  const [formData, setFormData] = useState({
    devise: '',
    prix: '',
  });

  useEffect(() => {
    
    setTimeout(() => {
      const optionsFromAPI = [
        { value: 'USD', label: 'US Dollar' },
        { value: 'EUR', label: 'Euro' },
        { value: 'GBP', label: 'British Pound' },
      ];
      setDeviseOptions(optionsFromAPI);
    }, 1000);
  }, []);

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
              <h4 className="h4">Prix d'ouverture</h4>
            </div>
            <div className="card-body">
              <form onSubmit={saveData}>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>Devise</label>
                  </div>
                  <div className="col-md-9">
                    <select
                      name="devise"
                      value={formData.devise}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="">Select a Devise</option>
                      {deviseOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>Prix</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="prix"
                      value={formData.prix}
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

export default PrixDouverture;

import React, { useState, useEffect } from 'react';
import './AnnulationB.css';

function AnnulationB() {
  const [bureauOptions, setBureauOptions] = useState([]);
  const [formData, setFormData] = useState({
    bureau: '',
    reference: '',
  });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
  
    setTimeout(() => {
      const optionsFromAPI = [
        { value: 'bureau1', label: 'Bureau 1' },
        { value: 'bureau2', label: 'Bureau 2' },
        { value: 'bureau3', label: 'Bureau 3' },
      ];
      setBureauOptions(optionsFromAPI);
    }, 1000);
  }, []);

  const handleBureauChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, bureau: value });
  };

  const handleReferenceChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValider = (e) => {
    e.preventDefault();

    const dataFromAPI = {
      reference: formData.reference,
      action: 'Action Value',
      statut: 'Statut Value',
      dataSysteme: 'Data Systeme Value',
      dataPiece: 'Data Piece Value',
      heurePiece: 'Heure Piece Value',
      device: 'Device Value',
      montant: 'Montant Value',
      banque: 'Banque Value',
      coupure: 'Coupure Value',
      referenceOriginale: 'Reference Originale Value',
      utilisateur: 'Utilisateur Value',
      bureau: formData.bureau,
      motif: 'Motif Value',
    };

    setTableData([dataFromAPI]);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="h4">Liste versement banque</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleValider}>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>Bureau</label>
                  </div>
                  <div className="col-md-9">
                    <select
                      name="bureau"
                      value={formData.bureau}
                      onChange={handleBureauChange}
                      className="form-control"
                    >
                      <option value="">Select a Bureau</option>
                      {bureauOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-3">
                    <label>Reference</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="reference"
                      value={formData.reference}
                      onChange={handleReferenceChange}
                      className="form-control"
                    />
                  </div>
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

      {tableData.length > 0 && (
       <div className="table-container" style={{ overflowX: 'auto' }}> 
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr className='head'>
                    <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Reference</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Action</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Statut</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Data Systeme</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Data Piece</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Heure Piece</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Device</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Montant</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Banque</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Coupure</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Reference Originale</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Utilisateur</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Bureau</th>
                      <th className="nowrap-cell" style={{ backgroundColor: '#007bff', color: 'white' }}>Motif</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td className="nowrap-cell">{data.reference}</td>
                        <td className="nowrap-cell">{data.action}</td>
                        <td className="nowrap-cell">{data.statut}</td>
                        <td className="nowrap-cell">{data.dataSysteme}</td>
                        <td className="nowrap-cell">{data.dataPiece}</td>
                        <td className="nowrap-cell">{data.heurePiece}</td>
                        <td className="nowrap-cell">{data.device}</td>
                        <td className="nowrap-cell">{data.montant}</td>
                        <td className="nowrap-cell">{data.banque}</td>
                        <td className="nowrap-cell">{data.coupure}</td>
                        <td className="nowrap-cell">{data.referenceOriginale}</td>
                        <td className="nowrap-cell">{data.utilisateur}</td>
                        <td className="nowrap-cell">{data.bureau}</td>
                        <td className="nowrap-cell">{data.motif}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default AnnulationB;

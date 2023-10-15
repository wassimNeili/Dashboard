import React, { useState } from 'react';
import '../annulationachat/AnnulationA.css';

function BureauReferenceForm() {
  const [selectedBureau, setSelectedBureau] = useState('');
  const [reference, setReference] = useState('');
  const [tableData, setTableData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newData = fetchData(selectedBureau, reference);

   
    setTableData(newData);
    setShowTable(true);
  };

  const fetchData = (bureau, reference) => {
   
    return [
     
      {
        Reference: 'REF001',
        Action: 'Action 1',
        Statut: 'Statut 1',
        Date: '2023-09-15',
        Heure: '09:00 AM',
        Utilisateur: 'User 1',
        Bureau: 'Bureau 1',
        Devise: 'USD',
        Valeur: 1000,
        Cours: 1.25,
        'V.contre valeur': 1250,
        Coupure: '10x100',
        Client: 'Client 1',
        Nationalité: 'Nationality 1',
        'Type achat': 'Type Achat 1',
        Type: 'Type 1',
        Destination: 'Destination 1',
        'N° de la declaration de la douane': 'Declaration 1',
        'Date de le declaration de la douane': '2023-09-15',
        'N° du bordereau de l\'opération de Vente initiale': 'Bordereau 1',
        'Intermédiare agrée': 'Intermédiare 1',
        'Num ordre de mission': '1',
        'Date ordre de mission': '2023-09-16',
        'N°autorisationBCT': 'Autorisation 1',
        'Date autorisation BCT': '2023-09-17',
      },
      
     
    ];
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="h4">Liste achat</h4>
            </div>
            <div className="card-body">
      <form onSubmit={handleFormSubmit}>
      <div className="mb-3 row">
                  <div className="col-md-3">
          <label htmlFor="bureau">Bureau</label>
          </div>
                  <div className="col-md-9">
          <select
            name="bureau"
            value={selectedBureau}
            onChange={(e) => setSelectedBureau(e.target.value)}
            className="form-control"
            required
          >
            <option value="">Select a Bureau</option>
            <option value="Bureau1">Bureau 1</option>
            <option value="Bureau2">Bureau 2</option>
          </select>
          </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-3">
          <label htmlFor="reference">Reference</label>
          </div>
                  <div className="col-md-9">
          <input
            type="text"
            name="reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="form-control"
            required
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
      {showTable && (
        <div className="table-container" style={{ overflowX: 'auto' }}>
          <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                
          <table>
            <thead>
              <tr className='head'>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Reference</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Action</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Statut</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Date</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Heure</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Utilisateur</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Bureau</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Devise</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Valeur</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Cours</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>V.contre valeur</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Coupure</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Client</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Nationalité</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Type achat</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Type</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Destination</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>N° de la declaration de la douane</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Date de le declaration de la douane</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>N° du bordereau de l'opération de Vente initiale</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Intermédiare agrée</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Num ordre de mission</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>Date ordre de mission</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }}>N°autorisationBCT</th>
                <th className='nowrap-cell' style={{ backgroundColor: '#007bff', color: 'white' }} >Date autorisation BCT</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td className="nowrap-cell">{item.Reference}</td>
                  <td className="nowrap-cell">{item.Action}</td>
                  <td className="nowrap-cell">{item.Statut}</td>
                  <td className="nowrap-cell">{item.Date}</td>
                  <td className="nowrap-cell">{item.Heure}</td>
                  <td className="nowrap-cell">{item.Utilisateur}</td>
                  <td className="nowrap-cell">{item.Bureau}</td>
                  <td className="nowrap-cell">{item.Devise}</td>
                  <td className="nowrap-cell">{item.Valeur}</td>
                  <td className="nowrap-cell">{item.Cours}</td>
                  <td className="nowrap-cell">{item['V.contre valeur']}</td>
                  <td className="nowrap-cell">{item.Coupure}</td>
                  <td className="nowrap-cell">{item.Client}</td>
                  <td className="nowrap-cell">{item.Nationalité}</td>
                  <td className="nowrap-cell">{item['Type achat']}</td>
                  <td className="nowrap-cell">{item.Type}</td>
                  <td className="nowrap-cell">{item.Destination}</td>
                  <td className="nowrap-cell">{item['N° de la declaration de la douane']}</td>
                  <td className="nowrap-cell">{item['Date de le declaration de la douane']}</td>
                  <td className="nowrap-cell">{item['N° du bordereau de l\'opération de Vente initiale']}</td>
                  <td className="nowrap-cell">{item['Intermédiare agrée']}</td>
                  <td className="nowrap-cell">{item['Num ordre de mission']}</td>
                  <td className="nowrap-cell">{item['Date ordre de mission']}</td>
                  <td className="nowrap-cell">{item['N°autorisationBCT']}</td>
                  <td className="nowrap-cell">{item['Date autorisation BCT']}</td>
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

export default BureauReferenceForm;

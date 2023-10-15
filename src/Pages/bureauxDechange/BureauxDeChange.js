import React from "react";
import CustomTable from "../table/CustomTable";
import './BureauxDeChange.css'
function BureauxDeChange() {
  const columns = [
    {
      key: "logo",
      title: "Logo",
      dataIndex: "logo",
      render: (text, record) => <img src={record.logo} alt="Logo" style={{ width: '50px', height: '50px' }} />,
    },
    {
      key: "nom",
      title: "Nom",
      dataIndex: "nom",
    },
    {
      key: "identifiant",
      title: "Identifiant",
      dataIndex: "identifiant",
    },
    {
      key: "adresse",
      title: "Adresse",
      dataIndex: "adresse",
    },
    {
      key: "telephone",
      title: "Telephone",
      dataIndex: "telephone",
    },
    {
      key: "statut",
      title: "Statut",
      dataIndex: "statut",
    },
  ];

  return (
    <div className="bureau">
   
     
        <CustomTable
          data="https://jsonplaceholder.typicode.com/users"
          addNewPath="FormBureau"
          title="Liste des bureaux de change" 
          columns={columns}
        />
      </div>

  );
}

export default BureauxDeChange;

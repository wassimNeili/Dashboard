import React from "react";
import CustomTable from "../table/CustomTable";
import './Agences.css'

function Agences() {
  const columns = [
    {
      key: "nom",
      title: "Nom",
      dataIndex: "nom",
    },
    {
      key: "region",
      title: "Region",
      dataIndex: "region",
    },
    
  ];

  return (
    <div className="Agences">
      
  <CustomTable
  data=""
  addNewPath='FormAgences'
  title="Liste des agences" 
  columns={columns}
/>

     
    </div>
  );
}

export default Agences;

import React from "react";
import CustomTable from "../table/CustomTable";
import './Banques.css'


function Banques() {
  const columns = [
    {
      key: "nom",
      title: "Intermédiaire agrée",
      dataIndex: "nom",
    },
    {
      key: "identifiant",
      title: "Code BCT",
      dataIndex: "identifiant",
    },
    
  ];

  return (
    <div className="bank">
   
  <CustomTable
  data=""
  addNewPath="Formbanques"
  title="Liste des banques" 
  columns={columns}
/>

      
    </div>
  );
}

export default Banques;

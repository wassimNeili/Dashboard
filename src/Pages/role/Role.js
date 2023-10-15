import React from "react";
import CustomTable from "../table/CustomTable";
import './Role.css'


function Role() {
  const columns = [
    {
      key: "code",
      title: "Code",
      dataIndex: "code",
    },
    {
      key: "label",
      title: "Label",
      dataIndex: "label",
    },
    {
        key: "categorie",
        title: "Categorie",
        dataIndex: "categorie",
      },
    
  ];

  return (
    <div className="Role">
       
  <CustomTable
  data=""
  addNewPath="formrole"
  title="Liste des rôles" 
  columns={columns}
/>

   
    </div>
  );
}

export default Role;

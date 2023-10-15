import React, { useEffect, useState } from "react";
import CustomTable from "../table/CustomTable";
import { Link, useNavigate } from 'react-router-dom';
import './Entreprises.css'
import AxiosService from '../../service/AxiosService'

function Entreprises() {
  const columns = [
    {
      key: "ID",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type",
    },
  ];

  const [entreprises, setEntreprises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEntreprisesData();
  }, []);

  const fetchEntreprisesData = () => {
    const axiosService = new AxiosService();
    const jwtToken = localStorage.getItem('jwtToken');

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    };

    const url = "/api/companies";

    axiosService
      .get(url, headers)
      .then((response) => {
        setEntreprises(response.data);
      })
      .catch((error) => {
        console.error("Error fetching companies:", error);
      });
  };

  const handleEdit = (record) => {
    const columnsData = columns.map((col) => ({
      key: col.key,
      title: col.title,
      dataIndex: col.dataIndex,
    }));

    const selectedRecordData = {
      id: record.id,
      name: record.name,
      type: record.type,
    };
    navigate(`/Entreprises/editPage?columns=${JSON.stringify(columnsData)}&record=${JSON.stringify(selectedRecordData)}`);
  };

  const handleDelete = async (record) => {
    try {
      const axiosService = new AxiosService();
      await axiosService.delete(`http://197.14.56.60:8445/api/companies/${record.id}`);
      fetchEntreprisesData();
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <div className="entreprises">
      <div className="path">
        <Link to="/Entreprises">
          <span className="customText">Entreprises</span>
        </Link>
      </div>
      <CustomTable
        data={entreprises}
        addNewPath="formEntreprises"
        title="Liste des entreprises"
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Entreprises;

import './CustomTable.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import EditModal from '../entreprises/EditModal';
import AxiosService from '../../service/AxiosService';

function CustomTable({ columns, tableProps, title, addNewPath, apiURL, headers }) {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const usersPerPage = 5;

  useEffect(() => {
    setLoading(true);
    const axiosService = new AxiosService();
    const jwtToken = localStorage.getItem('jwtToken');
    const requestHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    };
    const entrepriseUrl = 'http://197.14.56.60:8445/api/companies';

    axiosService
      .get(entrepriseUrl, { headers: requestHeaders })
      .then((response) => {
        setDataSource(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [apiURL, headers]);

  const offset = currentPage * usersPerPage;
  const currentData = dataSource.slice(offset, offset + usersPerPage);

  const pageCount = Math.ceil(dataSource.length / usersPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleEditClick = (record) => {
    setSelectedRecord(record);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (record) => {
    setSelectedRecord(record);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmation = () => {
    const axiosService = new AxiosService();
    const jwtToken = localStorage.getItem('jwtToken');
    const requestHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    };
    const deleteUrl = `http://197.14.56.60:8445/api/companies/${selectedRecord.id}`;

    axiosService
      .delete(deleteUrl, { headers: requestHeaders })
      .then((response) => {
        console.log(`Deleted record with ID: ${selectedRecord.id}`);
        const updatedData = dataSource.filter((record) => record.id !== selectedRecord.id);
        setDataSource(updatedData);
        setIsDeleteConfirmationVisible(false);
        setSelectedRecord(null);
      })
      .catch((error) => {
        console.error('Error deleting record:', error);
        setIsDeleteConfirmationVisible(false);
      });
  };

  useEffect(() => console.log(currentData));

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>{title}</h4>
              <Link to={addNewPath} className="btn btn-new">
                Nouveau
              </Link>
            </div>
            <div className="card-body">
              <table {...tableProps} className="table table-striped">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th key={column.key}>{column.title}</th>
                    ))}
                    <th>modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={columns.length + 2}>Loading...</td>
                    </tr>
                  ) : (
                    currentData.map((record) => (
                      <tr key={record.id}>
                        {columns.map((column) => (
                          <td key={column.key}>{record[column.dataIndex]}</td>
                        ))}
                        <td>
                          <button
                            className="btn custom-btn"
                            onClick={() => handleEditClick(record)}
                          >
                            Modifier
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteClick(record)}
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={<span className="pagination-previous-next">précédente</span>}
                nextLabel={<span className="pagination-previous-next">suivante</span>}
                breakLabel={"..."}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
      {isDeleteConfirmationVisible && (
        <div className="delete-confirmation">
          <p>tu veux vraiment supprimer ça ?</p>
          <button onClick={handleDeleteConfirmation}>Delete</button>
          <button onClick={() => setIsDeleteConfirmationVisible(false)}>Cancel</button>
        </div>
      )}
      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          record={selectedRecord}
          columns={columns}
        />
      )}
    </div>
  );
}

export default CustomTable;

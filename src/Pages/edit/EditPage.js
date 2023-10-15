import React, { useState} from 'react';
import './EditPage.css';
import { useLocation } from 'react-router-dom';

function EditPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const columnsParam = searchParams.get('columns');
  const recordParam = searchParams.get('record');

  const columns = columnsParam ? JSON.parse(columnsParam) : [];
  const editedData = recordParam ? JSON.parse(recordParam) : {};

  const [editedDataState, setEditedDataState] = useState(editedData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDataState({ ...editedDataState, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Edited data:', editedDataState);
  };

  return (
    <div>
      <h2>Edit</h2>
      <form>
        {columns.map((column) => (
          <div key={column.key} className="group">
            <label>{column.title}:</label>
            <input
              className="inp"
              type="text"
              name={column.dataIndex}
              value={editedDataState[column.dataIndex] || ''}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button type="button" onClick={handleSubmit} className="save">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditPage;

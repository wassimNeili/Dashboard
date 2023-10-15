import React, { useState } from 'react';
import Modal from 'react-modal';
import './EditModal.css';

function EditModal({ isOpen, onRequestClose, record, columns }) {
  const [editedData, setEditedData] = useState({ ...record });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Edited data:', editedData);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="custom-modal">
      <h2>Edit</h2>
      <form>
        {columns.map((column) => (
          <div key={column.key} className="group">
            <label>{column.title}:</label>
            <input
              className="inp"
              type="text"
              name={column.dataIndex}
              value={editedData[column.dataIndex]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button type="button" onClick={handleSubmit} className="save">
          Save
        </button>
      </form>
    </Modal>
  );
}

export default EditModal;

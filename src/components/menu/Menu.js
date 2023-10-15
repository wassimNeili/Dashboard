import React, { useState } from 'react';
import './Menu.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import {
  FaUniversity,
  FaExchangeAlt,
  FaBuilding,
  FaTag,
  FaUserShield,
  FaTimes,
} from 'react-icons/fa';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const menuItems = [
    {
      icon: <FaBuilding className="menu-icon" />,
      title: 'Entreprises',
      path: '/Entreprises',
    },
    {
      icon: <FaExchangeAlt className="menu-icon" />,
      title: 'Bureaux de Change',
      path: '/bureauxdechange',
    },
    {
      icon: <FaTag className="menu-icon" />,
      title: "Prix d'Ouverture",
      path: '/prixdouverture',
    },
    {
      icon: <FaUniversity className="menu-icon" />,
      title: 'Banques',
      path: '/banques',
    },
    {
      icon: <FaBuilding className="menu-icon" />,
      title: 'Agences',
      path: '/agences',
    },
    {
      icon: <FaUserShield className="menu-icon" />,
      title: 'Gestion Role',
      path: '/role',
    },
    {
      icon: <FaTimes className="menu-icon" />,
      title: 'Annulation versement banque',
      path: '/annulationb',
    },
    {
      icon: <FaTimes className="menu-icon" />,
      title: 'Annulation achat',
      path: '/annulationa',
    },
  ];

  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`listItem ${
              index === selectedItem ? 'selected' : ''
            }`}
            onClick={() => handleItemClick(index)}
          >
            {item.icon}
            <span className="listItemTitle">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;

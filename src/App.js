import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css'; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/header/Header';
import Footer from "./components/footer/Footer"
import Menu from './components/menu/Menu';
import Entreprises from "./Pages/entreprises/Entreprises"
import BureauxDeChange from "./Pages/bureauxDechange/BureauxDeChange";
import PrixDouverture from "./Pages/prixdouverture/PrixDouverture";
import Banques from "./Pages/banques/Banques";
import Agences from "./Pages/agences/Agences";
import Role from './Pages/role/Role'
import AnnulationB from './Pages/annulationbanque/AnnulationB'
import AnnulationA from './Pages/annulationachat/AnnulationA'
import Login from "./Pages/login/Login"
import FormBureau from "./Pages/bureauxDechange/FormBureau"
import FormEntreprises from './Pages/entreprises/FormEntreprises'
import Formbanques from './Pages/banques/Formbanques';
import FormAgences from './Pages/agences/FormAgences';
import FormRole from './Pages/role/FormRole';
import EditPage from './Pages/edit/EditPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };
  const Layout = () => {
    return (
      <div className="main">
        <Header isLoggedIn={isLoggedIn} />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            
              <Outlet />
            
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        
        {
          path: "/Entreprises",
          element: <Entreprises />,
        },
        {
          path: "/Entreprises/formEntreprises",
          element: <FormEntreprises />,
        },
        {
          path: "/Entreprises/editPage/:id",
          element: <EditPage />,
        }
        ,
        {
          path: "/bureauxdechange",
          element: <BureauxDeChange />,
        },
        {
          path: "/BureauxDeChange/formBureau",
          element: <FormBureau />,
        },
        {
          path: "/prixdouverture",
          element: <PrixDouverture />,
        },
        {
          path: "/banques",
          element: <Banques />,
        },
        {
          path: "/banques/formbanques",
          element: <Formbanques />,
        },
        {
          path: "/agences",
          element: <Agences />,
        },
        {
          path: "/agences/formagences",
          element: <FormAgences />,
        },
        {
          path: "/role",
          element: <Role />,
        },
        {
          path: "/role/formrole",
          element: <FormRole />,
        },
        {
          path: "/annulationb",
          element: <AnnulationB />,
        },
        {
          path: "/annulationa",
          element: <AnnulationA />,
        },
        
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}


export default App;

//imports
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import Home from "./components/Home"
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Guitars from "./components/Guitars"

import Stores from "./components/Stores";

import GuitarState from "./context/Guitar/GuitarState";
import SingleStore from "./components/Stores/Single";

import StoreState from "./context/Store/StoreState";
import Single from "./components/Guitars/Single"
import CreateGuitar from './components/Guitars/Create'
import CreateStore from "./components/Stores/CreateStore";

import UserState from "./context/User/UserState";
import EditGuitar from "./components/Guitars/Single/Edit"

import EditStore from "./components/Stores/Single/EditarTienda"

import Auth from './routes/Auth'
import Private from './routes/Private'
import Profile from "./components/User/Profile";
const Router = ()=>{
  return (
      <>
      <UserState>

      <GuitarState>
          <StoreState>

         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                {/*localhost:3000/ */}
                <Route index element={<Home/>}/>
                {/* RUTAS DE AUTENTICACION */}
                {/* evitan que un usuario loggeado pueda entrar a Register.js y login.js */}
                
                
                <Route path="registro"
                 element={<Auth component={Register}/>}/>
                
                <Route path="iniciar-sesion"
                 element={<Auth component={Login}/>}/>  
                
                <Route path="guitarras" element={<Guitars/>}/>
                <Route path="tiendas" element={<Stores/>}/>
                <Route path="guitarras/:id" element ={<Single/>}/>
                <Route path="tiendas/:id" element={<SingleStore/>}/>
                {/* localhost:3000/guitarras/crear */}
                <Route path="guitarras/crear" element={<CreateGuitar/>}/>
                {/* localhost:3000/guitarras/:id/editar */}
                <Route path="/guitarras/:id/editar" element={<EditGuitar/>}/>
                <Route path="tiendas/crearTienda" element={<CreateStore/>}/>
                {/* localhost:3000/profile */}
							<Route path="profile" element={<Private component={Profile} />} />
              
                <Route path="tiendas/:id/editarTienda" element={<EditStore/>}/>
              </Route>
          </Routes>
        </BrowserRouter>

        </StoreState>
        </GuitarState>
        </UserState>
      
      </>
  )
}

export default Router
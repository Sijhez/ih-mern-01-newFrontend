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

const Router = ()=>{
  return (
      <>
      <GuitarState>
          <StoreState>

         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                {/*localhost:3000/ */}
                <Route index element={<Home/>}/>
                <Route path="registro" element={<Register/>}/>
                <Route path="iniciar-sesion" element={<Login/>}/>  
                <Route path="guitarras" element={<Guitars/>}/>
                <Route path="tiendas" element={<Stores/>}/>
                <Route path="guitarras/:id" element ={<Single/>}/>
                <Route path="tiendas/:id" element={<SingleStore/>}/>
                {/* localhost:3000/guitarras/crear */}
                <Route path="guitarras/crear" element={<CreateGuitar/>}/>
                <Route path="tiendas/crearTienda" element={<CreateStore/>}/>
            
              </Route>
          </Routes>
        </BrowserRouter>

        </StoreState>
        </GuitarState>
      </>
  )
}

export default Router
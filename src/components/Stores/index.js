import React, {useEffect, useContext} from "react";
import StoreContext from "../../context/Store/StoreContext";
import { Link } from "react-router-dom";

export default function Stores() {
    const ctx = useContext(StoreContext)
    const {stores, hello, cambiaTexto, getAllStores} = ctx
    return (
        <>
           <h2> Listado de Tiendas</h2>
           {/* <p>{hello}</p>
           <button onClick={()=>{cambiaTexto()}}>
               Cambiar el otro texto
           </button> */}
           <button onClick={()=>{getAllStores()}}>
               Obtener tiendas aqui
           </button>
           <ul>
                   {
                       stores.map((element)=>{
                           return(
                        <li key={element._id}>
                            <Link to={`/tiendas/${element._id}`}>
                            <p>{element.nombre}</p>
                            </Link>
                            <p>{element.telefono}</p>
                            
                        </li>
                           )
                                                  })
                   }
               </ul>

        </>
    )
}

import React, {useEffect, useContext} from "react";
import StoreContext from "../../context/Store/StoreContext";
import { Link } from "react-router-dom";

export default function Stores() {
    const ctx = useContext(StoreContext)
    const {stores, hello, cambiaTexto, getAllStores} = ctx
    
    useEffect(()=>{
        getAllStores()
    },[])
    
    
    return (
        <>
           <h2> Listado de Tiendas</h2>
        
           {/* <button
           className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           onClick={()=>{getAllStores()}}>
               Obtener tiendas aqui
           </button> */}
           <br/>
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

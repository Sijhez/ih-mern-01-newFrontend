import React, {useEffect, useContext} from 'react'
import GuitarContext from '../../context/Guitar/GuitarContext'
import {Link} from 'react-router-dom'

export default function Guitars() {
    //ESTADO GLOBAL
    const ctx = useContext(GuitarContext)
    const {guitars,
         hola, 
         changeText,
          getGuitars} = ctx
    //console.log(ctx)


    //ESTADO LOCAL


    return (
        <>
           <p> Listado de guitarras</p>
           {/* <p>{hola}</p>
           <button onClick={()=>{changeText()}}>
               Cambiar Texto
           </button> */}
           <button
           className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           onClick={()=>{getGuitars()}}>
               Obtener Guitarras
           </button>
           <div>
               <h2>Listado de guitarras</h2>
               <ul>
                   {
                       guitars.map((element)=>{
                           return(
                        <li key={element._id}>
                            <Link to={`/guitarras/${element._id}`}>
                            <p>{element.nombre}</p>
                            </Link>
                            <p>{element.precio}</p>
                            
                        </li>
                           )
                                                  })
                   }
               </ul>

           </div>
           <h2>{guitars.nombre}</h2>
        </>
    )
}

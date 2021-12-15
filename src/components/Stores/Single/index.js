import React, { useContext } from 'react'
import StoreContext from './../../../context/Store/StoreContext'

import { useParams } from 'react-router-dom'

export default function SingleStore() {
    const ctx = useContext(StoreContext)
    const {singleStore, getSingleStore} = ctx

    const params = useParams()
    const id = params.id

    return (
        <div>
           <h2> Aqui la Tienda individual</h2>
            <button
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => { getSingleStore(id) }}>
				Obtener Tienda individual
			</button>
           <h1>Tienda:{singleStore.nombre}</h1>
			<p>Descripción:{singleStore.domicilio}</p>
			<p>Precio:{singleStore.telefono}</p>

        </div>
    )
}

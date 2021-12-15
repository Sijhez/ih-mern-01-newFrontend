import React, { useContext } from 'react'
import StoreContext from '../../../context/Store/StoreContext'

import { useParams } from 'react-router-dom'

export default function SingleStore() {
    const ctx = useContext(StoreContext)
    const {singleStore, getSingleStore} = ctx

    const params = useParams()
    const id = params.id

    return (
        <div>
            Aqui la Tienda individual
            <button onClick={() => { getSingleStore(id) }}>
				Obtener Tienda individual
			</button>
           <h1>Tienda:{singleStore.nombre}</h1>
			<p>Descripción:{singleStore.domicilio}</p>
			<p>Precio:{singleStore.telefono}</p>

        </div>
    )
}

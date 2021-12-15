import React, { useContext } from 'react'
import GuitarContext from './../../../context/Guitar/GuitarContext'

import {useParams} from 'react-router-dom'


export default function Single() {

	const ctx = useContext(GuitarContext)
	const { singleGuitar, getGuitar } = ctx

	const params = useParams()
	const id = params.id
     
   
	return (
		<div>
		<h2>Página individual de guitarra</h2>			

			<button
            type="button" 
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => { getGuitar(id) }}>
				Obtener guitarra individual
			</button>
            <h1>Marca:{singleGuitar.nombre}</h1>
			<p>Descripción:{singleGuitar.descripcion}</p>
			<p>Precio:{singleGuitar.precio}</p>

		</div>
	)
}








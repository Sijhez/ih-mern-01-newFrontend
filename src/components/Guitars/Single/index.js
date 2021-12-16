import React, { useContext, useEffect } from 'react'
import GuitarContext from './../../../context/Guitar/GuitarContext'

import {useParams, Link} from 'react-router-dom'


export default function Single() {

	const ctx = useContext(GuitarContext)
	const { singleGuitar, getGuitar } = ctx

	const params = useParams()
	const id = params.id
     //es un hook que se ejecuta al finalizar el renderizado de react
    useEffect(()=>{
       getGuitar(id)
    },[])
   
	return (
		<>
    

        <div class="bg-white">

        <div class="mt-4 flex md:mt-0">
						<Link to={`/guitarras/${id}/editar`}>
							<button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Editar guitarra
							</button>
						</Link>
					</div>

  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
    <div class="lg:max-w-lg lg:self-end">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-2">
          <li>
            <div class="flex items-center text-sm">
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">
                Guitarras
              </a>

              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="ml-2 flex-shrink-0 h-5 w-5 text-gray-300">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            </div>
          </li>

          <li>
            <div class="flex items-center text-sm">
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">
                {singleGuitar.nombre}
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div class="mt-4">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {singleGuitar.nombre}
        </h1>
      </div>

      <section aria-labelledby="information-heading" class="mt-4">
        <h2 id="information-heading" class="sr-only">Información de producto</h2>

        <div class="flex items-center">
          <p class="text-lg text-gray-900 sm:text-xl">
         $ {singleGuitar.precio} MXN
              </p>

          <div class="ml-4 pl-4 border-l border-gray-300">
            <h2 class="sr-only">Reviews</h2>
            <div class="flex items-center">
              <div>
                <div class="flex items-center">
                  
                  <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg class="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p class="sr-only">4 out of 5 stars</p>
              </div>
              <p class="ml-2 text-sm text-gray-500">1624 reviews</p>
            </div>
          </div>
        </div>

        <div class="mt-4 space-y-6">
          <p class="text-base text-gray-500">
          {singleGuitar.descripcion}
            </p>
        </div>

        <div class="mt-6 flex items-center">
          <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <p class="ml-2 text-sm text-gray-500">Aún en existencia</p>
        </div>
      </section>
    </div>

    <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
      <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img src={singleGuitar.imagen} alt="Model wearing light green backpack with black canvas straps and front zipper pouch." class="w-full h-full object-center object-cover"/>
      </div>
    </div>

    <div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
      <section aria-labelledby="options-heading">
        <h2 id="options-heading" class="sr-only">Product options</h2>

        <form>
          <div class="sm:flex sm:justify-between">
            
            <fieldset>
              <legend class="block text-sm font-medium text-gray-700">
               Color:
              </legend>
              <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label class="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                  <input type="radio" name="size-choice" value="18L" class="sr-only" aria-labelledby="size-choice-0-label" aria-describedby="size-choice-0-description"/>
                  <p id="size-choice-0-label" class="text-base font-medium text-gray-900">
                    {singleGuitar.color}
                  </p>
                  <p id="size-choice-0-description" class="mt-1 text-sm text-gray-500">
                    La favorita de Kurt Cobain
                  </p>
                  <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
                </label>

                
              </div>
            </fieldset>
          </div>
          
          <div class="mt-10">
            <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to bag</button>
          </div>
          <div class="mt-6 text-center">
            <a href="#" class="group inline-flex text-base font-medium">
              <svg class="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span class="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
            </a>
          </div>
        </form>
        
      </section>
    </div>
  </div>
</div>
</>
	)
}








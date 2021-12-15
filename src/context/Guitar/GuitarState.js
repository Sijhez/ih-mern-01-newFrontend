//ESTADO GLOBAL - STORE: todo componente en React, van a tener acceso a este estado global


//la arquitectura que se utiliza para generar este estado global se le conoce como FLUX (acciones, dispatchers,flux,etc)

import { useReducer } from "react";
import GuitarContext from "./GuitarContext";
import GuitarReduce from "./GuitarReduce"
import axiosClient from "../../config/axios";
const GuitarState =(props)=>{
   //1. INITIAL STATE (estado inicial)
   const initialState = {
       guitars:[],
       singleGuitar:{
           _id:"",
           nombre:"",
           descripcion:"",
           color:"",
           precio:"",
           imagen:""
       },
       hola:"mundo"
   }

   //2. CONFIGURACION DE REDUCER y creacion de estado global:
      //Reducers: son funciones que alteran el estado global
    const [globalState, dispatch] = useReducer(GuitarReduce, initialState)

   //3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
   const changeText = () =>{
       dispatch({
           type:"CHANGE_TEXT",
           payload:"Estoy aprendiendo context sin morir."
       })
   }

   const getGuitars = async () =>{
       const res = await axiosClient.get("guitars/readall")
       console.log(res)
       console.log("Obteniendo guitarras...")
       
       const list = res.data.data
       dispatch({
           type:"GET_GUITARRAS",
           payload:list
       })
   }

   const getGuitar = async (guitarId) => {
    const res = await axiosClient.get(`guitars/readone/${guitarId}`)
    
    const selectedGuitar = res.data.data
    dispatch({
        type:"GET_GUITAR",
        payload:selectedGuitar
    })//esto envia los datos al reducer para cambiar estado global
    //console.log(res)
}
         
   //4. RETORNO
   return (
       //provider: Le va a dar acceso a todos los components para que tengan el estado global
       <GuitarContext.Provider
         value={{
            guitars: globalState.guitars,
            hola: globalState.hola,
            singleGuitar:globalState.singleGuitar, 
            changeText,
            getGuitars, getGuitar
         }}
       >
           {props.children}

       </GuitarContext.Provider>
   )
}

export default GuitarState
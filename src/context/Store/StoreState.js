import { useReducer } from "react";
import StoreContext from "./StoreContext";
import StoreReduce from "./StoreReduce";
import axiosClient from "../../config/axios";



const StoreState = (props) =>{
    const initialState = {
        stores: [],
        singleStore:{
            _id:"",
            nombre:"",
            domicilio:"",
            telefono:""
        },
        hello:"world"
    }

    //creacion de estadoo global
    const [globalState, dispatch]  = useReducer(StoreReduce, initialState)

    const cambiaTexto = () =>{
        dispatch({
            type:"CAMBIA_TEXTO",
            payload:"Estoy aprendiendo Context bien?."
        })
    }

    const getAllStores = async () =>{
        const res = await axiosClient.get("stores/readStores")
        const listStores = res.data.data
        dispatch({
            type:"GET_TIENDAS",
            payload:listStores
        })
    }

     const getSingleStore = async(storeId) =>{
         const res = await axiosClient.get(`stores/readStores/${storeId}`)
        const selectedStore = res.data.data

         //  console.log(res)
        dispatch({
            type:"GET_STORE",
            payload:selectedStore
        })
        }

        const createStore = async(form)=>{
            const res = await axiosClient.post("stores/createStore", form)
            console.log(res)
        }

        const updateStore = async (form, idStore) =>{
            const res = await axiosClient.put(`stores/editStore/${idStore}`,form)
           const updatedStore = res.data.data
           dispatch({
               type:"UPDATE_STORE",
               payload:updatedStore
           })
        }

    return (
        //provider: Le va a dar acceso a todos los components para que tengan el estado global
        <StoreContext.Provider
          value={{
             stores: globalState.stores,
             hello: globalState.hello,
             singleStore:globalState.singleStore,
             cambiaTexto,
             getAllStores,
             getSingleStore,
             createStore,
             updateStore
          }
         }
        >
            {props.children}
 
        </StoreContext.Provider>
    )
 }
 
 export default StoreState


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
         const res = await axiosClient.get(`stores/readOneStore/${storeId}`)
         console.log(res)
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
             getSingleStore
          }
         }
        >
            {props.children}
 
        </StoreContext.Provider>
    )
 }
 
 export default StoreState

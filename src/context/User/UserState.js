import { useReducer } from "react";

import UserReducer from './UserReducer'
import UserContext from "./UserContext";
import axiosClient from './../../config/axios'

const UserState=(props)=>{
    //initial state
    const initialState = {
		currentUser: {
			nombre: "",
			apellido: "",
			pais: "",
			direccion: "",
			email: "",
			password: ""
		},
        authStatus:false
	}

 
    //configuracion del reducer
   const[globalState, dispatch] =useReducer(UserReducer, initialState)
 
    //funciones
    const registerUser = async (form) => {
        console.log(form)
		const res = await axiosClient.post("users/create", form)
		

        const token = res.data.data
        console.log(token)
        dispatch({  
        type:"REGISTRO_EXITOSO",
        payload:token
        })

	}

    const loginUser = async (form)=>{
        const res= await axiosClient.post ("users/login", form)
        console.log(res)
        const token = res.data.data
        console.log(token)
		dispatch({
			type: "LOGIN_EXITOSO",
			payload: token
		})
    }

    const verifyingToken = async ()=>{
        const token = localStorage.getItem("token")
        if(token){
            axiosClient.defaults.headers.common["x-auth-token"] = token       
         } else{
             delete axiosClient.defaults.headers.common["x-auth-token"]
         }

         try {
             const res = await axiosClient.get("users/verifytoken")

             console.log(res)
               const userData = res.data.data
               dispatch({
                   type: "GET_DATA_USER",
                   payload:userData
               })

         } catch (error) {
             console.log(error)
             
         }
    }
 
    //retorno
    return (
		<UserContext.Provider
		value={{
            currentUser: globalState.currentUser,
            authStatus: globalState.authStatus,
            registerUser,
            loginUser,
            verifyingToken
        }}
		>

			{props.children}

		</UserContext.Provider>

	)
 }
 export default UserState
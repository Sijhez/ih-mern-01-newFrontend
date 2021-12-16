const reducer = (globalState, action)=>{
    switch (action.type){
            case "GET_DATA_USER":
                return{
                    ...globalState,
                    authStatus:true,
                    currentUser:action.payload
                }

           case "REGISTRO_EXITOSO":
            case "LOGIN_EXITOSO":
                localStorage.setItem("token", action.payload)
               return{
                  ...globalState,
                  authStatus:true
               }

        default:
            return globalState
    }

}

export default reducer
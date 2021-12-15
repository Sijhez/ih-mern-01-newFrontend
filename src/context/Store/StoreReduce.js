const reducer = (globalState, action)=>{

    
  switch(action.type){
      case "GET_TIENDAS":
          return{
              ...globalState,
              stores:action.payload
          }
          
      case "CAMBIA_TEXTO":
          return{
              ...globalState,
              hello:action.payload
          }
          default:
              return globalState
  }
}

export default reducer
//CONTEXT
//es la inicialización del context, esto significa que comienza con un valor inicial de null, pero conforme agregamos nuevos valores, el null cambiará a un objeto
import { createContext } from "react";

const GuitarContext = createContext(null)  //aqui vamos a generar variables globales. Sustituye al PROPS que usaubamos anteriormente

export default GuitarContext
import React, {useContext} from 'react'
import UserContext from "../context/User/UserContext"
const Home = () => {
    const ctx = useContext(UserContext)
    const {
		verifyingToken
	} = ctx

    return (
        <div>
           <button onClick={() => {
				verifyingToken()
			}}>
				Verificar sesión
			</button>
        </div>
    )
}

export default Home

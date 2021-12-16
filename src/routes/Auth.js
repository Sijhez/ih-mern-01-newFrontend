import React, {useContext, useEffect, useState} from 'react'
//redirecciones para usarse dentro de router dom
import {Navigate} from 'react-router-dom'

import UserContext from '../context/User/UserContext'

                                 //destructuración de paramentros
export default function PublicRoute({ component: Component, ...props }) {
    const userCtx = useContext(UserContext)
    
    const { authStatus, verifyingToken } = userCtx

    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        await verifyingToken()
        setLoading(false)

    }, [authStatus])

    return (
		<>
			{
				authStatus ?
				(<Navigate replace to="/" />)
				:
				(<Component/>)
			}
		</>
    )
    
}
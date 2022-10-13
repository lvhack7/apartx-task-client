import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../utils/routes'

function AppRouter() {
    const [loggedIn, setLogged] = useState(localStorage.getItem('token'))
    
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         setLogged(true)
    //     }
    // }, [])

    return (
        <Switch>
            {
                loggedIn ?
                authRoutes.map(route => (
                    <Route key={route.path} path={route.path} component={route.Component} exact />
                ))
                :
                publicRoutes.map(route => (
                    <Route key={route.path} path={route.path} component={route.Component} exact />
                ))
            }
            <Redirect to="/home" />
        </Switch>
    )
}

export default AppRouter
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import MonsterHome from './MonsterHome'

export default function PrivateRoute(props){
  // const {function, function, prop} = props
  return <Route {...props} render={(routerProps) => {
    //routerProps would be like useHistory, etc
    return localStorage.token
    ? (
      <>
        <MonsterHome {...routerProps}/>
      </>
    )
    : <Redirect to='/' />
  }} />
}
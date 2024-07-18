import React from 'react'
import { Outlet ,Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
  const auth = localStorage.getItem("logIn")
  return auth ? <Outlet/> : <Navigate to={'/login'}/>
}

import  { Children, useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
 const {authDetail} = useContext(AuthContext)

 if(!authDetail.isLoggedIn){
    return <Navigate to="/login"/>
 }
  return children
  
}

export default PrivateRoute
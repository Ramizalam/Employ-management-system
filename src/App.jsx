import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'

const App = () => {
 const [user, setUser] = React.useState(null)
 const handleLogin = (email,password)=>{
  if(email =='admin@me.com' &&  password == '123'){
    setUser('admin')
 }
 else if(email =='user@me.com' &&  password == '123'){
   setUser('employee')
}
else{ alert("invalid credentials" )
}
 }
 
  return (
    <div>
      {!user? <Login handleLogin= {handleLogin}/>: ' '}   
      {user === 'admin' ? <AdminDashboard/> : <EmployeDashboard/>}
      
    </div>
  )
}

export default App

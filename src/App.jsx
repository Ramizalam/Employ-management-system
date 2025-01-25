import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './utils/AuthProvider'
import { data } from 'autoprefixer'

const App = () => {
 const [user, setUser] = useState(null)
 const [loggedInUserData, setLoggedInUserData] = useState(null)
 const authdata = useContext(AuthContext)

useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
 
}, [])


 const handleLogin = (email, password) => {
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Auth Data:', authdata);

  if (email === 'admin@me.com' && password === '123') {
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  } else if (authdata) {
    const employee = authdata.employees.find((e) => e.email === email && e.password === password)
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
   
  } else {
    alert('Invalid credentials');
  }
};


 
  return (
    <div>
      {!user? <Login handleLogin= {handleLogin}/>: ' '}   
      {user === 'admin' ? <AdminDashboard /> : ( user  == 'employee' ? <EmployeDashboard  data ={loggedInUserData} /> : null )}
      
    </div>
  )
}

export default App

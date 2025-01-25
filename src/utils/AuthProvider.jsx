import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from './localStorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)
 useEffect(() => {
  setLocalStorage()
  const {employees, admin} = getLocalStorage()
    setUserData({employees,admin})
 }, [])

 const updateEmployees = (newEmployees) => {
  setUserData((prevState) => ({
    ...prevState,
    employees: newEmployees
  }));
  localStorage.setItem('employees', JSON.stringify(newEmployees));
};
 
  return (
    <div>
      <AuthContext.Provider value={{ ...userData, updateEmployees }}>
      {children}
      </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
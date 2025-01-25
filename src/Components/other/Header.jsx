import React, { useEffect } from 'react'
import { useState } from 'react'

const  Header = (props) => {
  const [userName, setUserName] = useState(null)
  const data = props.data;
  useEffect(() => {
    const name = () => {
      if (data && data.firstName) {
        setUserName(data.firstName);
      } else {
        setUserName('admin');
      }
    };
    name();
  }, [data]);
  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
  return (
    <div className='flex justify-between items-end'>
        <h1 className=' text-2xl font-medium' >Hello <br /> <span className='text-3xl font-semibold'>{userName}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 px-6 py-2 rounded text-lg font-medium'>Logout</button>
    </div>
  )
}

export default Header
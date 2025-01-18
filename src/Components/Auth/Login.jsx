import React, { useState } from 'react'

const Login = () => {
      const [email, setEmail] = useState('')
       const [password, setPassword] = useState('hhd')
    const submithandler = (e) => {
        e.preventDefault()
        console.log('email',email)
        console.log('password',password)
         setEmail(" ")
         setPassword(" ")
    }
  return (
    <div className=' flex items-center justify-center h-screen w-screen '>
      <div className=' border-2  p-20 border-emerald-400 rounded-xl'>
        <form onSubmit={(e)=>{
            submithandler(e)
        }}
         className='flex flex-col items-center justify-center ' >
            <input 
             value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required className=' border-2 border-emerald-600 bg-transparent w-full rounded-full font-medium text-lg py-2 px-6  outline-none placeholder: text-gray-400 ' type="email" placeholder='Enter your email' />
            <input
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className='m-3 border-2 border-emerald-600  bg-transparent w-full rounded-full font-medium text-lg py-2 px-6  outline-none placeholder: text-gray-400' type="password" placeholder='Enter your Password' />
           <button className='m-7 text-white border-none outline-none w-full hover:bg-emerald-700  bg-emerald-600 rounded-full text-lg py-2 px-6 '>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

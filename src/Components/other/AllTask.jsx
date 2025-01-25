import React, { useContext } from 'react'
import { AuthContext } from '../../utils/AuthProvider'

const AllTask = () => {

   const authData =  useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-3   rounded overflow-auto mt-2'>
          <div className=' flex py-2 px-4 mb-2 bg-emerald-700 justify-between rounded'>
            <h3 className='w-1/5 text-lg font-medium '>Employee Name</h3>
            <h3 className='w-1/5 text-lg font-medium '>New task</h3>
            <h3 className='w-1/5 text-lg font-medium '>Active task</h3>
            <h3 className='w-1/5 text-lg font-medium '>Completed </h3>
            <h3 className='w-1/5 text-lg font-medium '>failed</h3>
        </div>


       <div className=''>
         {authData.employees.map(function(elem,idx){
            return <div key={idx} className=' flex py-2 px-4 mb-2 border-2 border-emerald-500 justify-between rounded'>
            <h3 className='text-lg font-medium  w-1/5 text-white-600 '>{elem.firstName}</h3>
            <h3 className='text-lg font-medium   w-1/5 text-blue-600 '>{elem.taskCounts.newTask}</h3>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400 '>{elem.taskCounts.active}</h3>
            <h3 className='text-lg font-medium w-1/5 text-green-600 '>{elem.taskCounts.completed}</h3>
            <h3 className='text-lg font-medium w-1/5 text-red-600 '>{elem.taskCounts.failed}</h3>
        </div>
        })}
       </div>
        
       
        
    </div>
  )
}

export default AllTask
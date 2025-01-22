import React from 'react'

const NewTask = ({data}) => {
    console.log(data)
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-blue-500 rounded-xl p-3' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.taskCategory}</h3>
                
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-2 font-semibold text-xl'>{data.taskTitle}</h2>
            <p className='text-sm '>{data.taskDescription}</p>
           
           <div className='flex mt-4 gap-5 w-full items-center justify-center '>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4'>complete</button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4'>failed</button>
           </div>
         
        </div>
        
  )
}

export default NewTask
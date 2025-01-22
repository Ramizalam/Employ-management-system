import React from 'react'

const ActiveTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-500 rounded-xl p-3' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.taskCategory}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-2 font-semibold text-xl'>{data.taskTitle}</h2>
            <p className='text-sm '>{data.taskDescription}</p>
        </div>
  )
}

export default ActiveTask
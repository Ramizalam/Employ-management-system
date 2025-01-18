import React from 'react'

const TaskListNumber = () => {
  return ( 
    <div className='flex mt-7 justify-between screen gap-5'>
      <div className=' w-[45%]  rounded-xl bg-red-500 px-6 py-9'>
       <h2 className='text-3xl font-semibold'>0</h2>
       <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%]  rounded-xl bg-yellow-500 px-6 py-9'>
       <h2 className='text-3xl font-semibold'>0</h2>
       <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%]  rounded-xl bg-green-500 px-6 py-9'>
       <h2 className='text-3xl font-semibold'>0</h2>
       <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%]  rounded-xl bg-blue-500 px-6 py-9'>
       <h2 className='text-3xl font-semibold'>0</h2>
       <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber 
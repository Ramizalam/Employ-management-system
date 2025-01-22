import React from 'react'

const TaskListNumber = ({data}) => {
  return ( 
    <div className='flex mt-7 justify-between screen gap-5'>
      <div className=' w-[45%]  rounded-xl bg-red-500 px-6 py-9'>
       <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
       <h3 className='text-xl font-medium'>failed</h3>
      </div>
      <div className=' w-[45%]  rounded-xl bg-yellow-500 px-6 py-9'>
       <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
       <h3 className='text-xl font-medium'>Active</h3>
      </div>
      <div className=' w-[45%]  rounded-xl bg-green-500 px-6 py-9'>
       <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
       <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className=' w-[45%]  rounded-xl bg-blue-500 px-6 py-9'>
       <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
       <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber 
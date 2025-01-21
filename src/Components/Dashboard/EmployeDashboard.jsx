import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeDashboard = ({data}) => {
  return (
    <div className='px-10 py-5 bg-[#1C1C1C] h-screen'>
        <Header data={data }/>
        <TaskListNumber data={data} />
        <Tasklist data ={data} />
    </div>
  )
}

export default EmployeDashboard
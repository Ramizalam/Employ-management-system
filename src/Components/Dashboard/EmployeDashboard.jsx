import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeDashboard = (props) => {
  return (
    <div className='px-10 py-5 bg-[#1C1C1C] h-screen'>
        <Header changeUser ={props.changeUser} data={props.data }/>
        <TaskListNumber data={props.data} />
        <Tasklist data ={props.data} />
    </div>
  )
}

export default EmployeDashboard
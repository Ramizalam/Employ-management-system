import React, { useState,useContext  } from 'react'
import FailedTask from '../TaskList/FailedTask'
import ActiveTask from '../TaskList/ActiveTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import { AuthContext } from '../../utils/AuthProvider'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [taskCategory, settaskCategory] = useState('')
  const { employees, updateEmployees } = useContext(AuthContext);
  const submitHandler = (e)=>{
    e.preventDefault()
     const NewTask = {taskTitle,taskDescription,taskDate,taskCategory,active:false,newTask:true,failed: false,Completed:false};

    const updatedEmployees = employees.map((elem) => {
      if (elem.firstName === assignTo) {
        elem.tasks.push(NewTask);
        elem.taskCounts.newTask += 1;
      }
      return elem;
    });
      updateEmployees(updatedEmployees);
     setAssignTo('')
      settaskCategory('')
      setTaskDate('')
      setTaskDescription('')
    setTaskTitle('')
  }
  return (
    <div>
         <div className='mt-4 p-5 bg-[#1C1C1C] rounded'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
            className=' flex  flex-wrap  w-full  items-start justify-between' >
            <div className='w-1/2'>
            <h3 className='text-sm text-gray-300 m-0.5'>Task Title </h3>
            <input 
             value={taskTitle}
             onChange={(e)=>{
              setTaskTitle(e.target.value)}}
            className='w-4/5 text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400 ' type="text" placeholder="Enter Task Title"/>
            <h3 className='text-sm text-gray-300 m-0.5'>Date</h3>
            <input
            value={taskDate}
            onChange={(e)=>{setTaskDate(e.target.value)}}
             className='w-4/5 text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400' type="date"/>
            <h3 className='text-sm text-gray-300 m-0.5'>Assign to</h3>
            <input
             value={assignTo}
             onChange={(e)=>{setAssignTo(e.target.value)}}
             className='w-4/5 text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='employe name ' />
            <h3 className='text-sm text-gray-300 m-0.5'>Category</h3>
            <input
             value={taskCategory}
             onChange={(e)=>{settaskCategory(e.target.value)}}
             className='w-4/5 text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Design/dev' />
            </div>
           
            <div className='w-2/5  items-start flex flex-col' >
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
             value={taskDescription}
             onChange={(e)=>{setTaskDescription(e.target.value)}}
            className='w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
            <button className='py-2 w-full  bg-emerald-500 hover:bg-emerald-600 rounded px-5 mt-5'>Create Task</button>
            </div>
           
            </form>
           
        </div> 
    </div>
  )
}

export default CreateTask
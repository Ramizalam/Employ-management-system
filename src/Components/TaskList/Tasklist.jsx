import React from 'react'
import NewTask from './NewTask'
import ActiveTask from './ActiveTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className=' flex h-[48%] w-full  mt-5 flex-start gap-5 py-4 flex-nowrap overflow-x-auto'>
       {data.tasks.map((elem,idx)=>{
     
         if(elem.newTask){
            return <NewTask key={idx} data= {elem}/>
          }
            if(elem.active){
               
                return <ActiveTask key={idx} data= {elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data= {elem}/>
            }
           
            if(elem.failed){
                return <FailedTask key={idx} data= {elem}/>
            }

       })}
      
    </div>
  )
}

export default Tasklist
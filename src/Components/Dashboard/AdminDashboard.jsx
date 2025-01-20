import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className=' h-screen w-full p-10'>
        <Header/>
        <div>
            <form >
            <h3>Task Title </h3>
            <input type="text" placeholder="Enter Task Title"/>
            <h3>description</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <h3>Date</h3>
            <input type="date"/>
            <h3>Assign to</h3>
            <input type="text" placeholder='employe name ' />
            <h3>Categorie</h3>
            <input type="text" placeholder='Design/dev' />
            <button>Create Task</button>
            </form>
           
        </div>
    </div>
   

  )
}

export default AdminDashboard
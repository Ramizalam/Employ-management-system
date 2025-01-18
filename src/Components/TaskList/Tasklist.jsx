import React from 'react'

const Tasklist = () => {
  return (
    <div id='tasklist' className=' flex h-[48%] w-full  mt-5 flex-start gap-5 py-4 flex-nowrap overflow-x-auto'>
        <div className=' flex-shrink-0 h-full w-[300px] bg-red-500 rounded-xl p-3' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>18 jan 2024</h4>
            </div>
            <h2 className='mt-2 font-semibold text-xl'>Create youtube video</h2>
            <p className='text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nobis!</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-500 rounded-xl p-3' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>18 jan 2024</h4>
            </div>
            <h2 className='mt-2 font-semibold text-xl'>Create youtube video</h2>
            <p className='text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nobis!</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-green-500 rounded-xl p-3' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>18 jan 2024</h4>
            </div>
            <h2 className='mt-2 font-semibold text-xl'>Create youtube video</h2>
            <p className='text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nobis!</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-blue-500 rounded-xl p-3' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High</h3>
                <h4 className='text-sm'>18 jan 2024</h4>
            </div>
            <h2 className='mt-2 font-semibold text-xl'>Create youtube video</h2>
            <p className='text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nobis!</p>
        </div>
        
        
    </div>
  )
}

export default Tasklist
import React from 'react'
import { Link } from 'react-router-dom'



const Q12 = () => {

    const OpenTap =()=>{
        window.open( "/q12_1" )

     }

    

    return (
        <div className=' h-[80vh] flex items-center justify-center flex-col'>
            <h1 className=' font-bold text-xl text-orange-500'> New Tap open  </h1> <br />
            <button onClick={OpenTap} className=' border-2 font-semibold p-2 border-yellow-500 rounded-lg hover:bg-slate-500 duration-300 transition hover:text-white'>New TAP</button> <br />
            <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link exact to='/Interview_Question_javascript'> Go to Home</Link></button>
        </div>
    )
}

export default Q12

import React from 'react'

const Q12_1 = () => {


    const CloseTap =()=>{
        window.close( "close-browser-tab" )

     }



  return (
   <div className=' h-[80vh] flex items-center justify-center flex-col'>
            <h1 className=' font-bold text-xl text-orange-500'>  Close the browser Tap    </h1> <br />
           
            <button onClick={CloseTap} className=' border-2 font-semibold p-2 border-yellow-500 rounded-lg hover:bg-slate-500 duration-300 transition hover:text-white'>SHUTDOWN TAP</button> <br />
           
        </div>
  )
}

export default Q12_1

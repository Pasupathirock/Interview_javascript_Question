import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Q18 = () => {
    const[input,setInput] = useState()
    const[isDisplay,setDisplay] = useState()

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const Bubble_sort = (e) => {
        setInput(e.target.value)
        const str = input
        let arr = str.split(',');
       


        for(var i = 0; i < arr.length; i++){
     
            // Last i elements are already in place  
            for(var j = 0; j < ( arr.length - i -1 ); j++){
                
              // Checking if the item at present iteration 
              // is greater than the next iteration
              if(arr[j] > arr[j+1]){
                  
                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
              }
            }
        setDisplay(arr+',')
   
  
    }
        }
  return (
    <div className=" h-[80vh] flex justify-center items-center flex-col">
    <h4 className=' text-center font-semibold text-lg  text-red-400'>Bubble Sort in number</h4>
    <input className=' border-2 border-yellow-400 p-1 mt-2 w-80 ' name='N' type="text" placeholder="Enter a number(comma seperated values).."onChange={handleChange} /><br /><br />
    <button className=' border-2 border-yellow-400  -mt-8 p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
            onClick={Bubble_sort}>Sorting</button>
     <p>{isDisplay &&<div className='text-green-600 font-normal'> <a className=' text-indigo-600 uppercase font-semibold'> Result:</a>{isDisplay}</div>}</p>
    <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link to='/'> Go to Home</Link></button>  
  </div>
  )
}

export default Q18
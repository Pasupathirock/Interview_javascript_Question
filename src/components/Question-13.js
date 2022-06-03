import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Q13 = () => {
    const [string, setString] = useState();
    const handleChange=(e)=>{
        setDisplay();
        setString(e.target.value);
      }
    const[isDisplay,setDisplay] = useState()
    const Sort_Orderly = (e) => {
        var sort = string.split(' ');
        var tmp;
        for(var i = 0; i < sort.length; i++){
          for(var j = i + 1; j < sort.length; j++){
            /* if ASCII code greater then swap the elements position*/
            if(sort[i] > sort[j]){
              tmp = sort[i];
              sort[i] = sort[j];
              sort[j] = tmp;
            }
          }
        }
       setDisplay (`${sort.join(' ')}`);
    }
  return (
    <div className=" h-[80vh] flex justify-center items-center flex-col">
    <h4 className=' text-center font-semibold text-lg  text-red-400'>Sort words in Order Alphamatically</h4>
    <input className=' border-2 border-yellow-400 p-1 mt-2 ' type="text" placeholder="Enter a string sentence..."onChange={handleChange} /><br /><br />
    <button className=' border-2 border-yellow-400 p-2 -mt-8 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
            onClick={Sort_Orderly}>Submit</button>
            <p>{isDisplay &&<div className='text-green-600 text-lg uppercase font-bold'>  Result:<a className='text-white lowercase  font-bold'>{isDisplay}</a></div>}</p>

    <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link to='/'> Go to Home</Link></button>  
    
  </div>
    
  )
}

export default Q13
import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const Q8 = () => {
 
  
    const [number,setnumber]=useState([]);
    const [isDisplay,setDisplay]=useState(true);
    const handleChange=(e)=>{
      setDisplay(false);
      setnumber(e.target.value);
    }



      const Fibonac=()=>{
        setDisplay(true);
        
        let str = parseInt(number)
        var x;
        for(var fiboArray = [0], i=0,j=1,k=0; k<(str-2);i=j,j=x,k++ ){
            x=i+j;
            fiboArray.push(x);
        }
       
        setDisplay(" "+fiboArray)
    }


    return (
      <div className=" h-[80vh] flex justify-center items-center flex-col">
      
        <h4 className=' text-center font-semibold text-lg  text-red-400'>Fiboonacci Series</h4>
        <input className=' border-2 border-yellow-400 p-1 mt-2 ' type="number" placeholder="Enter the number..."onChange={handleChange} required /><br /><br />
        <button className=' border-2 border-yellow-400  -mt-8 p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
                onClick={Fibonac}>Check </button>
         <b><p className=' container'>{isDisplay && isDisplay }</p></b> 
        <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold' ><Link to='/'> Go to Home</Link></button> 
        
      </div>
  )
}

export default Q8
import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const Q21 = () => {
 
    const [number,setnumber]=useState([]);
    const [isDisplay,setDisplay]=useState(true);
    const handleChange=(e)=>{
      setDisplay();
      setnumber(e.target.value);
    }

      const Factor_Check=()=>{
        setDisplay();

        let n=number;
        let arr = [];
        
        for(let i =1; i<=n; i++){
          if(n % i === 0){
            arr.push(i);
          }
        }
        setDisplay (" "+arr);
      }
    


    return (
      <div className=" h-[80vh] flex justify-center items-center flex-col">
        <h4 className=' text-center font-semibold text-lg  text-red-400'>Factors of a Given Numbers</h4>
        <input className=' border-2 border-yellow-400 p-1 mt-2 ' name='N' type="number" placeholder="Enter a number..."onChange={handleChange} /><br /><br />
        <button className=' border-2 border-yellow-400  -mt-8 p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
                onClick={Factor_Check}>Check </button>
         <p>{isDisplay &&<div className='text-green-600 font-normal'> <a className=' text-indigo-600 uppercase font-semibold'> Result:</a>{isDisplay}</div>}</p>
        <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link exact to='/Interview_Question_javascript'> Go to Home</Link></button>  
      </div>
  )
}

export default Q21

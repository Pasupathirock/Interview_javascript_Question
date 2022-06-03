import { useState } from 'react'
import { Link } from 'react-router-dom';

const Q10 = () => {
    const [someString, setsomeString] = useState({
        firstvalue: "",
        secondvalue: ""
    });
    const handleChange = (e) => {
        console.log(e.target.value);
        setsomeString({
            ...someString,
            [e.target.name]:e.target.value
        });
      }
    const[isDisplay,setDisplay] = useState()
    const CheckAnagram = (e) => {
        let a = someString.firstvalue;
        let b = someString.secondvalue;
        let temp;
        let strarr = []
        temp = a
        a = b
        b = temp
        setDisplay(a.concat(" ", b))
    }
  return (
  
        <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'> Swapping of Two string</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4  w-64'  name = "firstvalue" value={someString.firstvalue}
                   type="text" placeholder="Enter a first string..."  onChange={handleChange} /><br />
                <input className=' border-2 border-yellow-400 p-1 mt-4 w-64'   name = "secondvalue" value={someString.secondvalue}
                   type="text" placeholder="Enter a second string..."  onChange={handleChange} />  <br /> <br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={CheckAnagram}>Swapping</button>
                    <p>{isDisplay &&<div className='text-green-600 text-lg uppercase font-bold'>  Result:<a className='text-white lowercase  font-bold'>{isDisplay}</a></div>}</p>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link to='/'> Go to Home</Link>
              </button>  
              </div>
    
  )
}

export default Q10
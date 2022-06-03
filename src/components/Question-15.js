import { useState } from 'react'
import { Link } from 'react-router-dom';

const Q15 = () => {
    const [someNumber, setSomeNumber] = useState({
        firstvalue: "",
        secondvalue: ""
    });
    function handleChange(event) {
        console.log(event.target.value);
        setSomeNumber({
            ...someNumber,
            [event.target.name]:event.target.value
        });
      }
    const[isDisplay,setDisplay] = useState()
    const LCM = (event) => {
        let num1 = someNumber.firstvalue
        let num2 = someNumber.secondvalue
        let min = (num1 > num2) ? num1 : num2;

        // while loop
        while (true) {
            if (min % num1 == 0 && min % num2 == 0) {
                setDisplay(`The LCM of ${num1} and ${num2} is ${min}`);
                break;
            }
            min++;
        }
    }
  return (
  
        <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'> Leat Commen Multiply(LCM)</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4  w-64'  name = "firstvalue" value={someNumber.firstvalue}
                   type="number" placeholder="Enter a first positive Number"  onChange={handleChange} /><br />
                <input className=' border-2 border-yellow-400 p-1 mt-4 w-64'   name = "secondvalue" value={someNumber.secondvalue}
                   type="number" placeholder="Enter a second positive Number"  onChange={handleChange} />  <br /> <br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={LCM}>Find LCM</button>
                    <p>{isDisplay &&<div className='text-green-600 text-lg uppercase font-bold'>  Result:<a className='text-white lowercase  font-bold'>{isDisplay}</a></div>}</p>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link to='/'> Go to Home</Link>
              </button>  
              </div>
    
  )
}

export default Q15
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Q16 = () => {

  const [number, setNumber] = useState({
    firstvalue: "",
    secondvalue: ""
  })

            const [isDisplay,setDisplay]=useState(true);
            const handleChange=(e)=>{
              setNumber({
                ...number,
                [e.target.name]:e.target.value
              })

            }

            
            const HCF=()=>{
              setDisplay('');
             
              // program to find the HCF or GCD of two integers

      let hcf;
 
  let num1 = number.firstvalue
  let num2 = number.secondvalue

  // looping from 1 to number1 and number2
   for (let i = 1; i <= num1 && i <= num2; i++) {

    // check if is factor of both integers
    if( num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }

    // display the hcf
   
}


setDisplay(`HCF of ${num1} and ${num2} is ${hcf}.`);

    }

      return (
              <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'> Highest Common Factor (HCF) or Greatest Common Divisor (GCD)</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4  w-64'  name = "firstvalue" value={number.firstvalue}
                   type="number" placeholder="Enter a first positive Number"  onChange={handleChange} /><br />
                <input className=' border-2 border-yellow-400 p-1 mt-4 w-64'   name = "secondvalue" value={number.secondvalue}
                   type="number" placeholder="Enter a second positive Number"  onChange={handleChange} />  <br /> <br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={HCF}>Find HCF</button>
                    <p>{isDisplay &&<div className='text-green-600 text-lg uppercase font-bold'>  Result:<a className='text-white lowercase  font-bold'>{isDisplay}</a></div>}</p>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link to='/'> Go to Home</Link>
              </button>  
              </div>
            );
          }

export default Q16
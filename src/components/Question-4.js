import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const Q4 = () => {
 
    const [number,setnumber]=useState([]);
    const [isDisplay,setDisplay]=useState(true);
    const handleChange=(e)=>{
      setDisplay('');
      setnumber(e.target.value);
    }

      const numberCheck=()=>{
        setDisplay('');
        // program to check an Armstrong number of three digits

let sum = 0;
const numberOfDigits = number.length;

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
   

// check the condition
if (sum == number) {
  setDisplay(`${number} is an Armstrong number.`);
}
else {
  setDisplay(`${number} is not an Armstrong number.`);
}



}

}
    return (
      <div className=" h-[80vh] flex justify-center items-center flex-col">
        <h4 className=' text-center font-semibold text-lg  text-red-400'>Check Armstrong number</h4>
        <input className=' border-2 border-yellow-400 p-1 mt-2 ' name='N' type="text" placeholder="Enter a number..."onChange={handleChange} /><br /><br />
        <button className=' border-2 border-yellow-400  -mt-8 p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
                onClick={numberCheck}>Check </button>
                <p>{isDisplay &&<div className='text-green-600 text-lg uppercase font-bold'>  Result:<a className='text-white lowercase  font-bold'>{isDisplay}</a></div>}</p>
        <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link to='/'> Go to Home</Link></button>  
      </div>
  )
}

export default Q4

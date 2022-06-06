import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const Q7 = () => {
 
    const [number,setnumber]=useState([]);
    const [isDisplay,setDisplay]=useState('');
    const handleChange=(e)=>{
      setDisplay('');
      setnumber(e.target.value);
    }

      const numberCheck=()=>{
        setDisplay('');
// program to check if a number is prime or not


let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    setDisplay("1 is neither Prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        setDisplay(`${number} is a Prime number`);
    } else {
        setDisplay(`${number} is a not Prime number`);
    }
}





}
    return (
      <div className=" h-[80vh] flex justify-center items-center flex-col">
        <h4 className=' text-center font-semibold text-lg  text-red-400'>Check Prime number</h4>
        <input className=' border-2 border-yellow-400 p-1 mt-2 ' name='N' type="text" placeholder="Enter a number..."onChange={handleChange} /><br /><br />
        <button className=' border-2 border-yellow-400  -mt-8 p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
                onClick={numberCheck}>Check </button>
      <p>{isDisplay &&<div className='text-green-600 font-normal'> <a className=' text-indigo-600 uppercase font-semibold'> Result:</a>{isDisplay}</div>}</p>
        <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link exact to='/Interview_Question_javascript'> Go to Home</Link></button>  
      </div>
  )
}

export default Q7
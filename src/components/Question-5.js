import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Q5 = () => {

    const [string,setString]=useState('');
            const [isDisplay,setDisplay]=useState(true);
            const handleChange=(e)=>{
              setDisplay('');
              setString(e.target.value);
            }



    const validatePalin=()=>{
        setDisplay('');
             
              
    // get the total length of the words
    const len = string.length;

    // Use for loop to divide the words into 2 half
    for (let i = 0; i < len / 2; i++) {

        // validate the first and last characters are same
        if (string[i] !== string[len - 1 - i]) {
            setDisplay( 'It is not a palindrome');
        }
    }
    setDisplay( 'It is a palindrome');
}

        
            return (
              <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'>Palindrome (numbers or strings)</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4 '
                   type="text" placeholder="Enter a string..."onChange={handleChange} /><br /><br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={validatePalin}>validate Palindrome</button>
                    <p>{isDisplay &&<div className='text-green-600 text-lg uppercase font-bold'>  Result:<a className='text-white lowercase  font-bold'>{isDisplay}</a></div>}</p>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link exact to='/Interview_Question_javascript'> Go to Home</Link>
              </button>  
              </div>
            );
          }

export default Q5

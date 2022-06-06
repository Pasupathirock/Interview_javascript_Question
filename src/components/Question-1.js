import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Q1 = () => {

    const [string,setString]=useState('');
            const [isDisplay,setDisplay]=useState(true);
            const handleChange=(e)=>{
              setDisplay(false);
              setString(e.target.value);
            }
            const removeVowels=()=>{
              setDisplay(true);
              let temp=string;
              temp=temp.replace(/[aeiou]/gi, '');
              setString(temp);
            }
            return (
              <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'>  Remove Vowels in string</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4 '
                   type="text" placeholder="Enter a string..."onChange={handleChange} /><br /><br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={removeVowels}>Remove Vowels</button>
                    <p className=' text-lg font-bold text-white'> Result: {isDisplay && string}</p>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link exact to='/Interview_Question_javascript'> Go to Home</Link>
              </button>  
              </div>
            );
          }

export default Q1

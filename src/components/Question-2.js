import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Q2 = () => {
    const [string,setString]=useState('');
            const [isDisplay,setDisplay]=useState(true);
            const handleChange=(e)=>{
              setDisplay(false);
              setString(e.target.value);
            }
            const countVowels=()=>{
              setDisplay(true);
              let temp=string;
              temp=temp.match(/[aeiou]/gi,'').length;
              setString(temp);
            }
            return (
              <div className=" h-[80vh] flex justify-center items-center flex-col">
                <h4 className=' text-center font-semibold text-lg  text-red-400'>Count Vowels in string</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-2 ' type="text" placeholder="Enter a string..."onChange={handleChange} /><br /><br />
                <button className=' border-2 border-yellow-400 p-2 -mt-8 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
                        onClick={countVowels}>Count Vowels</button>
                        <p className=' text-lg font-bold text-white'> Result: {isDisplay && string}</p>

                <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link to='/'> Go to Home</Link></button>  
                
              </div>
    )
}

export default Q2

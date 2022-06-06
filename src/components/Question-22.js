import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Q22 = () => {

    const [string,setString]=useState('');
            const [isDisplay,setDisplay]=useState(true);
            const handleChange=(e)=>{
              setDisplay();
              setString(e.target.value);
            }
            const stringCombinations=()=>{
              setDisplay();
              let str = string
              let strLength = str.length;
             let result = [];
             let currentIndex = 0;
         while (currentIndex < strLength) {
           let char = str.charAt(currentIndex);
             let x;
        let arrTemp = [char];
          for (x in result) {
       arrTemp.push("" + result[x] + char);
      }

    result = result.concat(arrTemp);
    currentIndex++;
  }
  setDisplay (`${result}`);
            }
            return (
              <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'>  Print all possible combinations(String)</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4 '
                   type="text" placeholder="Enter a string..."onChange={handleChange} /><br /><br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={stringCombinations}>Click on Combinations</button>
                <p className=' font-medium text-base '><h3 className=' text-blue-600 text-center'>{isDisplay && <a>Result: {isDisplay}</a>}</h3></p>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link exact to='/Interview_Question_javascript'> Go to Home</Link>
              </button>  
              </div>
            );
          }

export default Q22

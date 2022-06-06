import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const Q11 = () => {
 
    const [array,setarray]=useState([]);
    const [isDisplay,setDisplay]=useState(true);
    const handleChange=(e)=>{
      setDisplay('');
      setarray(e.target.value);
    }

      const arrayCheck=()=>{
        let itemsMap = {};
let maxValue = 0;
let maxCount = 0;

// 3
for (let item of array) {
  // 4  
  if (itemsMap[item] == null) {
    itemsMap[item] = 1;
  } else {
    itemsMap[item]++;
  }

  //5
  if (itemsMap[item] > maxCount) {
    maxValue = item;
    maxCount = itemsMap[item];
  }
}

// 6
setDisplay(`Value : ${maxValue}, Count : ${maxCount}`);
console.log(`Value : ${maxValue}, Count : ${maxCount}`);

      }
    return (
      <div className=" h-[80vh] flex justify-center items-center flex-col">
        <h4 className=' text-center font-semibold text-lg  text-red-400'>Most Occuring Elements in an Array</h4>
        <input className=' border-2 border-yellow-400 p-1 mt-2 ' name='N' type="text" placeholder="Enter a array..."onChange={handleChange} /><br /><br />
        <button className=' border-2 border-yellow-400  -mt-8 p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
                onClick={arrayCheck}>Check </button>
         <p>{isDisplay &&<div className='text-green-600 text-lg uppercase font-bold'>  Result:<a className='text-white  font-bold'>{isDisplay}</a></div>}</p>
        <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link exact to='/Interview_Question_javascript'> Go to Home</Link></button>  
      </div>
  )
}

export default Q11
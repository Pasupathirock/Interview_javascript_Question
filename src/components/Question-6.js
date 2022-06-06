import React,{useState} from 'react'
import { Link } from 'react-router-dom';



const Q6 = () => {
    const [string,setString]=useState([]);
    const [isDisplay,setDisplay]=useState(true);
    const handleChange=(e)=>{
      setDisplay('');
      setString(e.target.value);
    }
    const Frequent=()=>{
      setDisplay('');
      const str = string
      var arr1=[];
      arr1 = str.split(' ');
      var mf = 1;
      var m = 0;
      var item;
      for (var i=0; i<arr1.length; i++)
      {
              for (var j=i; j<arr1.length; j++)
              {
                      if (arr1[i] == arr1[j])
                      m++;
                      if (mf<m)
                      {
                      mf=m; 
                      item = arr1[i];
                      }
              }
              m=0;
      }
      setDisplay(arr1+" ( " +mf +" times ) ") ;
  }
    return (
      <div className=" h-[80vh] flex justify-center items-center flex-col">
        <h4 className=' text-center font-semibold text-lg  text-red-400'>Number of words in a string(spilit method)</h4>
        <input className=' border-2 border-yellow-400 p-1 mt-2' type="text" placeholder="Enter a string..."onChange={handleChange} /><br /><br />
        <button className=' border-2 border-yellow-400  -mt-8 p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
                onClick={Frequent}>String Frequent</button>
                <p>{isDisplay &&<div className='text-green-600 text-lg uppercase font-bold'>  Result:<a className='text-white lowercase  font-bold'>{isDisplay}</a></div>}</p>
        <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link exact to='/Interview_Question_javascript'> Go to Home</Link></button>  
      </div>
    )

}
export default Q6

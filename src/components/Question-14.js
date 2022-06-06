import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Q14 = () => {
    const [string, setString] = useState();
    const handleChange=(e)=>{
        setDisplay();
        setString(e.target.value);
      }
    const[isDisplay,setDisplay] = useState()
    const Frequency = (e) => {
      function printans(ans)
      {
        document.write(` Entered string is = ${test}`);
        document.write("<br><br>");
        
      for( let [ key ,value] of ans)
      {
        // if()
        document.write(`  ${key} character occurs ${value} times  `  ); 
        document.write("<br><br>");
      }
      
      }
      
      // function count occurrence of character
      function count( str , outp_map )
      {
      for( let i = 0 ;i < str.length ;i++)
      {
        let k = outp_map.get(str[i]);
        outp_map.set(str[i], k+1) ;
      }
      //calling print function
      printans(outp_map);
      }
      
      //function create map to count character
      function count_occurs( test , callback )
      {
      //checking string is valid or not
      if( test.length === 0 )
      {
        console.log(" empty string ");
        return ;
      }
      else
      {
        // map for storing count values
        let ans = new Map();
        for( let i = 0 ;i < test.length;i++)
        {
        ans.set(test[i], 0);
        }
        callback( test ,ans); 
      }
      
      }
      
      // test string
      let test = string
    
      count_occurs( test ,count);
    
       } 
  return (
    <div className=" h-[80vh] flex justify-center items-center flex-col">
    <h4 className=' text-center font-semibold text-lg  text-red-400'>Count character frequency in a string</h4>
    <input className=' border-2 border-yellow-400 p-1 mt-2 ' type="text" placeholder="Enter a string..."onChange={handleChange} /><br /><br />
    <button className=' border-2 border-yellow-400 p-2 -mt-8 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600' 
            onClick={Frequency}>Submit</button>
    <p className=' text-blue-600 text-center'>{isDisplay && isDisplay}</p>

    <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'><Link exact to='/Interview_Question_javascript'> Go to Home</Link></button>  
    
  </div>
    
  )
}

export default Q14
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Q20 = () => {
    const [someNumber, setSomeNumber] = useState({
        firstvalue: "",
        secondvalue: "",
        thirdvalue:""
    });
    function handleChange(event) {
        console.log(event.target.value);
        setSomeNumber({
            ...someNumber,
            [event.target.name]:event.target.value
        });
      }
    const[isDisplay,setDisplay] = useState()
    const Si_Com = (event) => {
        let num1 = someNumber.firstvalue
        let num2 = someNumber.secondvalue
        let num3 = someNumber.thirdvalue
        
        let si;
        let ci;
        let amount;
        si = parseInt((num1*num2*num3)/100 );
        amount = num1*Math.pow((1 +num3/100),num2 );
        ci = amount-num1;
        setDisplay(  "Simple Interest value="+si+",   Compound Interest value="+ci)


    }
  return (
  
        <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'> Leat Commen Multiply(LCM)</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4  w-64'  name = "firstvalue" value={someNumber.firstvalue}
                   type="number" placeholder="Enter a first positive Number"  onChange={handleChange} /><br />
                <input className=' border-2 border-yellow-400 p-1 mt-4 w-64'   name = "secondvalue" value={someNumber.secondvalue}
                   type="number" placeholder="Enter a second positive Number"  onChange={handleChange} />  <br /> 
                <input className=' border-2 border-yellow-400 p-1 mt-4  w-64'  name = "thirdvalue" value={someNumber.thirdvalue}
                   type="number" placeholder="Enter a first positive Number"  onChange={handleChange} /><br /> <br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={Si_Com}>Find Interst</button>
                    <p>{isDisplay &&<div className='text-green-600 font-normal'> <a className=' text-indigo-600 uppercase font-semibold'> Result:</a>{isDisplay}</div>}</p>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link exact to='/Interview_Question_javascript'> Go to Home</Link>
              </button>  
              </div>
    
  )
}

export default Q20
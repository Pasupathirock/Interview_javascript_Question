import { useState } from 'react'
import { Link } from 'react-router-dom';

const Q19 = () => {
    const [someNumber, setSomeNumber] = useState({
        firstvalue: "",
        secondvalue: ""
    });
    function handleChange(event) {
        console.log(event.target.value);
        setSomeNumber({
            ...someNumber,
            [event.target.name]:event.target.value
        });
      }
    const[isDisplay,setDisplay] = useState()
    const Amicable_number = (event) => {
        let n1 = someNumber.firstvalue
        let n2 = someNumber.secondvalue
        let count_n1 = 0
        let count_n2 = 0
       for(let i=1; i<n1; i++){
           if(n1%i == 0){
            count_n1 = count_n1+i
           }
       }
       for(let j=1; j<n2; j++){
            if(n2%j == 0){
            count_n2 = count_n2+j
            
            }
        }
        if(count_n1 == n2 && count_n2 == n1){
            setDisplay("Both numbers are Amicable")
        } else {
            setDisplay("Both numbers are not Amicable")
        }
    }
  return (
  
        <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'> Amicable or Not</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4  w-64'  name = "firstvalue" value={someNumber.firstvalue}
                   type="number" placeholder=" example amicable Number 220.."  onChange={handleChange} /><br />
                <input className=' border-2 border-yellow-400 p-1 mt-4 w-64'   name = "secondvalue" value={someNumber.secondvalue}
                   type="number" placeholder="example amicable Number 284.."  onChange={handleChange} />  <br /> <br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={Amicable_number}>Check</button>
                    <p>{isDisplay &&<div className='text-green-600 font-normal'> <a className=' text-indigo-600 uppercase font-semibold'> Result:</a>{isDisplay}</div>}</p>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link exact to='/Interview_Question_javascript'> Go to Home</Link>
              </button>  
              </div>
    
  )
}

export default Q19
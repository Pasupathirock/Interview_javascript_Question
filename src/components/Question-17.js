import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Q17 = () => {

  const [someArray, setSomeArray] = useState({
    firstvalue: "",
   
  })

            const [isDisplay,setDisplay]=useState(true);
            const handleChange=(e)=>{
              setSomeArray({
                ...someArray,
                [e.target.name]:e.target.value
                
              })
            
            }

            
            const Matrix=()=>{
              setDisplay('');

            
               
              let a = someArray.firstvalue;
          

              let arr1 = new Array(3)
             
              
            
              for(var i=0; i < arr1.length; i++) {
                  arr1[i] = ['']
              }
             

            
             

            var k=0;
              
             for(i=0; i < 3; i++ ) {
                 for(var j=0; j < 3; j++) {
                     arr1[i][j] = a[k++]
                 }
             }
     
 
     
   

     for ( i = 0; i < arr1.length; i++) {
        for ( j = 0; j < i; j++) {
           const tmp = arr1[i][j];
           arr1[i][j] = arr1[j][i];
           arr1[j][i] = tmp;
        };
     }
    // setUserInfo(arr1)
     console.log(arr1)
     setDisplay(arr1+" ")

        }
      return (
              <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'>Matrix Transpose (3*3)</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4  w-64'  name = "firstvalue" value={someArray.firstvalue}
                   type="text" placeholder="Enter a 9 number "  onChange={handleChange} /><br /> <br />
               
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={Matrix}>Transpose</button>
                    <p>{isDisplay &&<div className='text-green-600 font-bold text-lg'>Result: <a className='text-white  uppercase font-bold text-lg'>{isDisplay}</a></div>}</p>
                   
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link to='/'> Go to Home</Link>
              </button>  
              </div>
            );
          }

export default Q17
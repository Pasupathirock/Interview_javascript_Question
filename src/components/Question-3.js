import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Q16 = () => {

  const [someArray, setSomeArray] = useState({
    firstvalue: "",
    secondvalue: ""
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
 //Matrix 1
 let num1 =someArray.firstvalue;
 let a = num1.toString(); 
 let arr1 = new Array(2)
 //1d
 for (var i = 0; i < arr1.length; i++) {
     arr1[i] = []
     console.log(arr1[i])
 }
 //2d
 var k = 0;
 for (i = 0; i < 2; i++) {
     for (var j = 0; j < 2; j++) {
         arr1[i][j] = a[k++]   
     }
 }
 
 for (i = 0; i < 2; i++) {
     for (var j = 0; j < 2; j++) {
         console.log(arr1[i][j] + " ")
     }
 }
 console.log(arr1)
 
 //Matrix 2
 let num2 =someArray.secondvalue;
 let b = num2.toString();
 let arr2 = new Array(2)
 //1d
 for (var r = 0; r < arr2.length; r++) {
     arr2[r] = []
     console.log(arr2[r])
 }
 //2d
 var t = 0;
 for (r = 0; r < 2; r++) {
     for (var s = 0; s < 2; s++) {
         arr2[r][s] = b[t++]
         
     }
 }
 
 for (r = 0; r < 2; r++) {
     for (var s = 0; s < 2; s++) {
        console.log(arr2[r][s] + " ")
     }
 }
 console.log(arr2)
 
 // Matrix multiplication
 const multiplyMatrices = (c, d) => {
    if (!Array.isArray(c) || !Array.isArray(d) || !c.length || !d.length) {
       throw new Error('arguments should be in 2-dimensional array format');
    }
    let x = c.length,
    z = c[0].length,
    y = d[0].length;
    if (d.length !== z) {
       // XxZ & ZxY => XxY
       throw new Error('number of columns in the first matrix should be the same as the number of rows in the second');
    }
    let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
    let product = new Array(x);
    for (let p = 0; p < x; p++) {
       product[p] = productRow.slice();
    }
    for (let g = 0; g < x; g++) {
       for (let h = 0; h < y; h++) {
          for (let f = 0; f < z; f++) {
             product[g][h] += c[g][f] * d[f][h];
          }
       }
    }
    return product;
 }
 
 let c = arr1;
 let d = arr2;
 

 document.getElementById("showresult").innerHTML=multiplyMatrices(c, d);
 
        }
      return (
              <div  className=' w-full h-[80vh] flex justify-center items-center flex-col'>
                <h4 className=' text-center font-semibold text-lg text-red-400'>Matrix Multiplication (2*2)</h4>
                <input className=' border-2 border-yellow-400 p-1 mt-4  w-64'  name = "firstvalue" value={someArray.firstvalue}
                   type="number" placeholder="Enter Any four number"  onChange={handleChange} /><br />
                <input className=' border-2 border-yellow-400 p-1 mt-4 w-64'   name = "secondvalue" value={someArray.secondvalue}
                   type="number" placeholder="Enter Any four number"  onChange={handleChange} />  <br /> <br />
                <button className=' border-2 border-yellow-400   p-2 rounded-lg hover:bg-slate-300 transition duration-200 ease-in-out hover:text-red-600 -mt-8' 
                    onClick={Matrix}>Submit</button>
                    <div className=' flex  items-center'>
                    <h2 className=' text-orange-400 text-lg font-bold'>Result:</h2>
                    <h2 id="showresult" className='text-white font-bold'></h2>
                    </div>
              <button className='mt-4 p-1 border-2  rounded-lg bg-red-600 text-white font-semibold'>
                <Link exact to='/Interview_Question_javascript'> Go to Home</Link>
              </button>  
              </div>
            );
          }

export default Q16
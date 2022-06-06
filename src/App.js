import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Q1 from './components/Question-1';
import Q2 from './components/Question-2';
import Q3 from './components/Question-3';
import Q4 from './components/Question-4';
import Q5 from './components/Question-5';
import Q6 from './components/Question-6';
import Q7 from './components/Question-7';
import Q8 from './components/Question-8';
import Q9 from './components/Question-9';
import Q10 from './components/Question-10';
import Q11 from './components/Question-11';
import Q12 from './components/Question-12';
import Q13 from './components/Question-13';
import Q14 from './components/Question-14';
import Q15 from './components/Question-15';
import Q16 from './components/Question-16';
import Q17 from './components/Question-17';
import Q18 from './components/Question-18';
import Q19 from './components/Question-19';
import Q20 from './components/Question-20';
import Q21 from './components/Question-21';
import Q22 from './components/Question-22';

import Q12_1 from './components/Question-12_1';




function App() {
  return (
<div className=" flex  justify-evenly items-center flex-col   ">

    <Routes>
    <Route exact path='/Interview_Question_javascript' element={<Home/>}/> 
    <Route path='/q1'    element={<Q1/>}/>
    <Route path='q2'    element={<Q2/>}/>
    <Route path='q3'    element={<Q3/>}/>
    <Route path='q4'   element={<Q4/>} />
    <Route path='q5'   element={<Q5/>} />
    <Route path='q6'   element={<Q6/>} />
    <Route path='q7'   element={<Q7/>} />
    <Route path='q8'   element={<Q8/>} />
    <Route path='q9'   element={<Q9/>} />
    <Route path='q10'  element={<Q10/>}/>
    <Route path='q11'  element={<Q11/>}/>
    <Route path='q12'  element={<Q12/>}/>
    <Route path='q13'  element={<Q13/>}/>
    <Route path='q14'  element={<Q14/>}/>
    <Route path='q15'  element={<Q15/>}/>
    <Route path='q16'  element={<Q16/>}/>
    <Route path='q17'  element={<Q17/>}/>
    <Route path='q18'  element={<Q18/>}/>
    <Route path='q19'  element={<Q19/>}/>
    <Route path='q20'  element={<Q20/>}/>
    <Route path='q21'  element={<Q21/>}/>
    <Route path='q22'  element={<Q22/>}/>


    <Route path='q12_1'  element={<Q12_1/>}/>

    


</Routes>
  </div>
  );
}

export default App;


import './App.css';
import {useState} from 'react';
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import All from './Components/All';
import Completd from './Components/Completed';
import Active from './Components/Active';
import Top from './Components/Top';
function App() {
   
    let [todo,setToDo]=useState([
        {
            work:"Create theme",
            status:false
        },
        {
            work:"Work on WordPress",
            status:false
        },
        {
            work:"Organize office main department",
            status:false
        },
        {
            work:"Error solve in HTML template",
            status:false
        }
      ]);

      
   
    
    
 return <>
 <BrowserRouter>
  <div class="container">
  <div className="row">
        <div className="col-md-12">
            <div className="card card-white">
                <div className="card-body">
                   <Top/>
      <Routes>
            <Route path='/alltasks' element={<All todo={{todo,setToDo}}/>}/>
            <Route path='/completedtasks' element={<Completd todo={todo}/>}/>
            <Route path='/activetasks' element={<Active todo={todo}/>}/>
            <Route path='/' element={<All todo={{todo,setToDo}}/>}/>

      </Routes>

</div>
</div>
</div>
</div>
</div>
</BrowserRouter>
 </>
}

export default App;

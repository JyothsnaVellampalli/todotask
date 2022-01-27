import React from 'react';
import {useState} from 'react';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function All(props) {
   
    let [task, setTask]=useState("");
    console.log(task);
    let navigate=useNavigate();
    
    function statuschange(b){
        console.log(b,b.status);  
        let update=[...props.todo.todo];
        // console.log(update);
        let item=b;
        item.status=!item.status;
        update.splice(props.todo.todo.indexOf(b),1,item);
        props.todo.setToDo(update);
    }

  function add(){
      if(task){
          let newArr=[...props.todo.todo]
          let idnew=newArr.length;
          newArr.push(
              { id:idnew+1,
                  work:task,
                  status:false
              })
          console.log(newArr);
          setTask("");
          props.todo.setToDo(newArr);
      }
  }

   function close(b){
        let closearr=[...props.todo.todo];
        closearr.splice(props.todo.todo.indexOf(b),1);
        console.log(closearr);
        props.todo.setToDo(closearr);
        navigate("/alltasks");
    }

  return<>
        
            <div className="props.todo-list">
                <form >
                        <input type="text" className="form-control add-task" placeholder="New Task..." onChange={b=>setTask(b.target.value)}/>
                        <Button variant="secondary" size="sm" className="addbtn" onClick={add}>Add</Button>
                </form>
                   
                    {
                        props.todo.todo.map((b,i)=>{
                            return <div className="props.todo-item" key={i}>
                            <div className="checker"><span><input type="checkbox" key={b.id} onClick={() =>statuschange(b)} /></span></div>
                            {b.status?<span><s>{b.work}</s></span>:<span>{b.work}</span>}
                            <button className="btn btn-sm-secondary" onClick={() =>close(b)}><i className="fa-solid fa-rectangle-xmark"></i></button>
                            
                        </div>
                        })
                    }
            </div>
               
  </>
}

export default All

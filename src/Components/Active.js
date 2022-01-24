import React from 'react'

function Active(props) {
  return <>
   
    <div className="props.todo-list">
  {
    props.todo.map((b,i)=>{
      return <div className="props.todo-item" key={i}>
        <i class="fa-solid fa-hand-back-point-right"></i>
      {b.status?<span> </span>:<span>{b.work}</span>}
     
      </div>
  })
  }
  </div>
  </>
}

export default Active

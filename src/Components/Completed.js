import React from 'react'

function Completed(props) {
   return <>
  
  <div className="props.todo-list">
  {
    props.todo.map((b,i)=>{
      return <div className="props.todo-item" key={i}>
      <i class="fa-solid fa-hand-back-point-right"></i>
      {b.status?<span>{b.work}</span>:<span> </span>}
      
      </div>
  })
  }
  </div>
  </>
}

export default Completed

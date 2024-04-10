import React from 'react'

const Todolist = ({todolist,deleteHandler}) => {
  return (
    <div>
     {todolist.map((todo,index) =>
        <div key={index}>
            <h4>{todo} &nbsp; <button className='btn btn-primary' onClick={()=> deleteHandler(index)}>Delete</button></h4>
        </div>
     
     )}
    </div>
  )
}

export default Todolist
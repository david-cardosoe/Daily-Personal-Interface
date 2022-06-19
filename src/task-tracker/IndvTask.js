import React from 'react'

const IndvTask = ({ task, onDelete}) => {
  return (
    <div className='indv-task-styling p-3 mb-2'>
        <div className='row'>
          <div className='col-10'><h4>{task.text}</h4></div>
          <div className='col'><button className='btn btn-outline-danger' onClick={() => onDelete(task.id)} >✓</button></div>
        </div>
        <div className='row'>
          <p>{task.day}</p>
        </div>
    </div>
  )
}

export default IndvTask
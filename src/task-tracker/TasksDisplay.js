import React from 'react'
import IndvTask from './IndvTask';

const TasksDisplay = ({ tasks, onDelete }) => {


  return (
    <div className='mt-3'>
        <div className='row'>
            {tasks.map((task, index) => (
                <IndvTask key={index} task={task} onDelete={onDelete} />
            ))}
        </div>
    </div>
  )
}

export default TasksDisplay
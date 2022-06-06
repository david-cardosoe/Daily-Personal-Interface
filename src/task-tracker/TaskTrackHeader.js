import React from 'react'

const TaskTrackHeader = ({ addTasks, onAC }) => {

  return (
    <div className='row'>
        <div className='col-10 text-left'>
            <h2>Today's Tasks</h2>
        </div>
        <div className='col-2 text'><button className={`btn btn-outline-${addTasks ? 'danger' : 'success'}`} onClick={onAC}>{addTasks ? 'Close' : 'Add'}</button></div>
    </div>
  )
}

export default TaskTrackHeader
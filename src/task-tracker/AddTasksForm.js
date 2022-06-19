import React from 'react'
import { useState } from 'react';


const AddTasksForm = ({ onAdd, sendText }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task');
            return;
        }

        onAdd({text,day});

        //sends me and jessica a text when I add a task
        const me = '7604157243';
        //const jess = '7609367260';
        //const forJess = "David added a new task: ";
        const forMe = "New Task: "
        //sendText(jess, (forJess + text + '@' + day));
        if(!day) {
            sendText(me, (forMe + text));
        }
        else {
            sendText(me, (forMe + text + ' @ ' + day));
        }

        setText('');
        setDay('');
    }

  return (
    <div className='container'>
        <div className='row m-2'>
            <label>Task</label>
            <input className='form-control' type={text} placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className='row m-2'>
            <label>Date & Time</label>
            <input className='form-control' type={text} placeholder='Add Date & Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>

        <div className='row m-2'>
            <div className='col-4'></div>
            <input type='submit' value='Save Task' className='btn btn-outline-dark col-4' onClick={onSubmit}></input>
        </div>
    </div>
  )
}

export default AddTasksForm
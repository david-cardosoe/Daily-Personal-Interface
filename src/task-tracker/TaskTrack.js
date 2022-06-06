import React from 'react'
import { useState, useEffect } from 'react';


import TaskTrackHeader from './TaskTrackHeader';
import AddTasksForm from './AddTasksForm';
import TasksDisplay from './TasksDisplay';

const TaskTrack = () => {
    const [addTasks, setAddTasks] = useState(false);
    const [tasks, setTasks] = useState([]);


    //Setting tasks initially that already exist in our database
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      }

      getTasks();
    }, []);


    //Fecthing our tasks
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:3000/tasks');
      const data = await res.json();

      return data;
    }



    const addTask = async (task) => {
        const res = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(task)
        });

        const data = await res.json();

        setTasks([...tasks, data]);
    }

    const onDelete = async (id) => {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE'
      })

      setTasks(tasks.filter((task) => task.id !== id));
    }



  return (
    <div className='container ttMain w-75'>
        <div>
            <TaskTrackHeader addTasks={addTasks} onAC={() => setAddTasks(!addTasks)} />
            {addTasks && <AddTasksForm onAdd={addTask} />}
            <TasksDisplay tasks={tasks} onDelete={onDelete} />
        </div>
    </div>
  )
}

export default TaskTrack
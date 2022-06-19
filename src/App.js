import './CalorieTracker.css';
import './TaskTracker.css';
import './PageHeading.css';
import PageHeading from './page-heading/PageHeading.js';
import Weather from './page-heading/Weather';

import TaskTrack from './task-tracker/TaskTrack';

import CalorieTracker from './Calorie/CalorieTracker';

import { useState, useEffect } from 'react';

const api = {
  key: "366daa4315568ac22e39da33f02a4e56",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  /*
  Here we have our use effect that renders the page every second to have live time on our app
  as well as provide a way to send text messages at a certain time
  */

  const [today, setDate] = useState(new Date());
  //const [rec, setRec] = useState('7604157243');
  //const [txtm, setTxtm] = useState("This is a test text message Hey There test");

  useEffect(() => {
    const timer = setInterval(() => {
        setDate(new Date());
        const tempDate = new Date();
        console.log(tempDate);
        if(tempDate.getHours() === 8 && tempDate.getMinutes() === 0 && tempDate.getSeconds() === 0) {
            morningText(weather)
        }
        else if(tempDate.getHours() === 16 && tempDate.getMinutes() === 0 && tempDate.getSeconds() === 0) {
          afternoonText();
        }
    }, 1 * 1000);
    return () => {
        clearInterval(timer);
    }
  }, []);

  //Sends the good morning text and is called when we specify a time in the prevoius useEffect hook
  const morningText = (weather) => {
    const textmess = `Good Morning David! Today's high is ${Math.round(weather.main.temp_max)}, the low is ${Math.round(weather.main.temp_min)}, with the current tempature being ${Math.round(weather.main.temp)}`;
    const recipient = '7604157243'

    fetch(`http://localhost:4000/send-text?recipient=${recipient}&textmessage=${textmess}`)
    .catch(err => console.log(err));
  }

  //Sends our afternoon text with tasks, must fetch tasks first so we created an 
  // async funtion to await the fecth
  const afternoonText = async() => {
    const recipient = '7604157243';
    const dataArr = [];
    let currentCalories = 0;
    let currentProtien = 0;

    const res = await fetch('http://localhost:3000/tasks');
    const data = await res.json();

    for(let i = 0; i < data.length; i++) {
      dataArr.push(' ' + data[i].text);
    }

    const response = await fetch('http://localhost:3000/food');
    const foodData = await response.json();
    currentCalories = foodData.cals;
    currentProtien = foodData.pro;

    const textmess = `Good Afternoon David! Todays remaining tasks: ${dataArr}. You currently have eaten ${currentCalories} calories with ${currentProtien}g of protein`;

    fetch(`http://localhost:4000/send-text?recipient=${recipient}&textmessage=${textmess}`)
    .catch(err => console.log(err));
  }

  //This is for when we add a task, will send message to both me and jessica
  //We need this to pass into our task component
  const sendText = (rec, txtm) => {
    fetch(`http://localhost:4000/send-text?recipient=${rec}&textmessage=${txtm}`)
    .catch(err => console.log(err));
  }
  
  
  //used for weather api and is passed to weather componenet, we need this here to acess the data it provides
  //when sending text messages
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${api.base}weather?q=encinitas&units=imperial&appid=${api.key}`)
        .then(response => response.json())
        .then(result => {
            setWeather(result);
            console.log(result);
        })
  }, []);


  return (
    <div>
        <div className='row m-1'>
          <div className='col-4'>
            <PageHeading today={today} />
          </div>
          <div className='col-4'>
            <Weather weather={weather}  />
          </div>
          <div className='col-4'>
            <CalorieTracker />
          </div>
        </div>
        <div className='row m-4'>
          <div className='col-6 '>
            <TaskTrack sendText={sendText} />
          </div>
        </div>
    </div>
  );
}
export default App;
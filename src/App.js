import './CalorieTracker.css';
import './TaskTracker.css';
import './PageHeading.css';
import PageHeading from './page-heading/PageHeading.js';
import Weather from './page-heading/Weather';

import TaskTrack from './task-tracker/TaskTrack';

import CalorieTracker from './Calorie/CalorieTracker';


function App() {

  return (
    <div>
        <div className='row m-1'>
          <div className='col-4'>
            <PageHeading />
          </div>
          <div className='col-4'>
            <Weather />
          </div>
          <div className='col-4'>
            <CalorieTracker />
          </div>
        </div>
        <div className='row m-4'>
          <div className='col-6 '>
            <TaskTrack />
          </div>
        </div>
    </div>
  );
}
export default App;
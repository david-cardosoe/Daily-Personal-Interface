import React from 'react'
import { useState, useEffect } from 'react';

const CalorieTracker = () => {
    
    const [foodCals, setFoodCals] = useState();
    const [foodPro, setFoodPro] = useState();

    useEffect(() => {
        fetchFood();
    }, []);

    const fetchFood = async () => {
        const res = await fetch('http://localhost:3000/food');
        const data = await res.json();
        setFoodCals(data.cals);
        setFoodPro(data.pro);
    }

    const [curCals, setCurCals] = useState('');
    const [curPro, setCurPro] = useState('');

    const foodSubmit = async (e) => {
        e.preventDefault();
        if(!curCals || !curPro) {
            alert('Must put in calories and protien');
            return;
        }

        let item = {cals: parseInt(foodCals) + parseInt(curCals), pro: parseInt(foodPro) + parseInt(curPro)}

        await fetch('http://localhost:3000/food', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then(() => {
                fetchFood();
            })
        })

        setCurCals('');
        setCurPro('');

    }

    const resetFood = async () => {
        let item = {cals: 0, pro: 0}

        await fetch('http://localhost:3000/food', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then(() => {
                fetchFood();
            })
        })

    }

  return (
    <div className='container mt-3 calorieTracker'>
        <div className='row'>
            <div className='col text-center'>
                <h3>Daily Calorie Tracker</h3>
            </div>
        </div>
        <form>
            <div className='row mt-4'>
                <div className='input-group text-center'>
                    <input type='number' min='0' className='form-control' placeholder='Calories' value={curCals} onChange={(e) => setCurCals(e.target.value)} />
                    <span className='input-group-addon'></span>
                    <input type='number' min='0' className='form-control' placeholder='Protien' value={curPro} onChange={(e) => setCurPro(e.target.value)} />
                    <input type='submit' className='btn btn-outline-success' onClick={foodSubmit} ></input>
                </div>
            </div>
        </form>
        <div className='row mt-5 text-center'>
            <div className='col-6'>
                <p>Total Calories: {foodCals}</p>
            </div>
            <div className='col-6'>
                <p>Total Protien: {foodPro}g</p>
            </div>
        </div>
        <div className='row text-center mt-1'>
            <div><a rel="noreferrer" href='https://www.calorieking.com/us/en/' target='_blank' className='link-info' style={{'textDecoration': 'none'}}>Calorie Lookup</a></div>
        </div>
        <div className='row text-center mt-2'>
           <div className='col-4'></div><button className='btn btn-outline-danger col' onClick={resetFood}>Reset</button><div className='col-4'></div>
        </div>
    </div>
  )
}

export default CalorieTracker
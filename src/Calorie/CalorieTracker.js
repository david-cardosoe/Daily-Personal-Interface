import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import { useState, useEffect } from 'react';

const CalorieTracker = () => {
    
    const [food, setFood] = useState({
        "cals": 0,
        "pro": 0
    });

    {/*
    useEffect(() => {
        const getFood = async () => {
            const foodFromServer = await fetchFood();
            console.log(foodFromServer);
            setFood([foodFromServer]);
        }

        getFood();
    }, []);

    const fetchFood = async () => {
        const res = await fetch('http://localhost:3000/food');
        const data = await res.json();

        return data;
    }
    */}

    const [curCals, setCurCals] = useState('');
    const [curPro, setCurPro] = useState('');

    const foodSubmit = (e) => {
        e.preventDefault();
        if(!curCals || !curPro) {
            alert('Must put in calories and protien');
            return;
        }



        const calories = parseInt(food.cals) + parseInt(curCals);
        const protien = parseInt(food.pro) + parseInt(curPro);

        setFood({
            cals: calories,
            pro: protien
        });

        setCurCals('');
        setCurPro('');

    }

    const test = (e) => {
        e.preventDefault()
        console.log(food[0].cals);
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
                    <input type='submit' className='btn btn-outline-success' onClick={foodSubmit}></input>
                </div>
            </div>
        </form>
        <div className='row mt-5 text-center'>
            <div className='col-6'>
                <p>Total Protien: {food.cals}g</p>
            </div>
            <div className='col-6'>
                <p>Total Protien: {food.pro}g</p>
            </div>
        </div>
    </div>
  )
}

export default CalorieTracker
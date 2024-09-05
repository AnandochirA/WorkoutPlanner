import React, { useState } from 'react';
import '../styles/Overview.css'; // Ensure your CSS is linked correctly
import { Link } from 'react-router-dom';

import heightIcon from '../assets/images/height-icon.png';
import weightIcon from '../assets/images/weight-icon.png';
import workoutIcon from '../assets/images/workout-icon.png';
import caloriesIcon from '../assets/images/calories-icon.png';
import waterIcon from '../assets/images/water-icon.jpg';

const Dashboard = () => {
  // State for each dynamic value
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(75);
  const [workoutDays, setWorkoutDays] = useState(4);
  const [calories, setCalories] = useState(2500);
  const [waterIntake, setWaterIntake] = useState(8);

  return (
    <div className="dashboard-container">
      <div className="side-nav">
        <div className="logo-text">
          <h1>Workout Planner</h1>
        </div>
        <Link to="/overview">
          <button>Dashboard</button>
        </Link>
        <Link to="/workout-plan">
          <button>Workout-Plan</button>
        </Link>
        <Link to="/tracking">
          <button>Tracking</button>
        </Link>
      </div>
      <div className="main-content">
        <div className="welcome-section">
          <h1>Welcome to Your Dashboard</h1>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={heightIcon} alt="Height" />
            <div className="card-content">
              <h3>Height</h3>
              <p>{height} cm</p>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Update height"
              />
            </div>
          </div>
          <div className="card">
            <img src={weightIcon} alt="Weight" />
            <div className="card-content">
              <h3>Weight</h3>
              <p>{weight} kg</p>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Update weight"
              />
            </div>
          </div>
          <div className="card">
            <img src={workoutIcon} alt="Workout" />
            <div className="card-content">
              <h3>Workout Days</h3>
              <p>{workoutDays} days</p>
              <input
                type="number"
                value={workoutDays}
                onChange={(e) => setWorkoutDays(e.target.value)}
                placeholder="Update workout days"
              />
            </div>
          </div>
          <div className="card">
            <img src={caloriesIcon} alt="Calories" />
            <div className="card-content">
              <h3>Calories per Day</h3>
              <p>{calories} kcal</p>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Update calories"
              />
            </div>
          </div>
          <div className="card">
            <img src={waterIcon} alt="Water" />
            <div className="card-content">
              <h3>Water Intake</h3>
              <p>{waterIntake} glasses</p>
              <input
                type="number"
                value={waterIntake}
                onChange={(e) => setWaterIntake(e.target.value)}
                placeholder="Update water intake"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

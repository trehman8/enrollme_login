// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('/api/classes')
      .then(response => setClasses(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {classes.map(cls => (
          <li key={cls.id}>
            {cls.name} - {cls.section} - Enrolled: {cls.enrolled} - Seats remaining: {cls.seatsRemaining}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

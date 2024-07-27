import logo from './logo.svg';
import './App.css';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import React, { useState } from 'react';
import Login from './Login';
import ClassForm from './ClassForm';
import Dashboard from './Dashboard';
import axios from 'axios';

function App() {
  return (
    <div>
      <LoginSignup/>
    </div>
  );
}


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Call login API
    axios.post('/api/login', { email, password })
      .then(response => setIsLoggedIn(true))
      .catch(error => console.error('Error logging in:', error));
  };

  const handleSubmitClass = (classData) => {
    // Call API to submit class data
    axios.post('/api/classes', classData)
      .then(response => console.log('Class submitted:', response.data))
      .catch(error => console.error('Error submitting class:', error));
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <ClassForm onSubmit={handleSubmitClass} />
          <Dashboard />
        </>
      )}
    </div>
  );
};

export default App;

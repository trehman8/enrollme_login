// src/ClassForm.js
import React, { useState } from 'react';

const ClassForm = ({ onSubmit }) => {
  const [className, setClassName] = useState('');
  const [section, setSection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ className, section });
    setClassName('');
    setSection('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Class and Section</h2>
      <div>
        <label>Class Name:</label>
        <input 
          type="text" 
          value={className} 
          onChange={(e) => setClassName(e.target.value)} 
        />
      </div>
      <div>
        <label>Section:</label>
        <input 
          type="text" 
          value={section} 
          onChange={(e) => setSection(e.target.value)} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClassForm;

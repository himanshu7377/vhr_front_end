import React from 'react';
import axios from 'axios';
import PhotoGallery from './components/PhotoGallery';
import './App.css';

// Set the base URL for axios requests
axios.defaults.baseURL = 'http://localhost:8000'; // Replace with your backend server URL


function App() {
  return (
    <div className="App">
      <PhotoGallery />
    </div>
  );
}

export default App;
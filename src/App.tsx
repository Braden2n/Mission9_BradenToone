import React from 'react';
import './App.css';

function Heading() {
  return (
    <div className="Heading">
      <h1>Welcome to the NCAA Basketball March Madness Website!</h1>
      <h3>
        This website contains all of the team information for the upcoming March
        Madness Tournament.
      </h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
    </div>
  );
}

export default App;

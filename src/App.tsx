import React from 'react';
import './App.css';

interface ITeam {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

class Team extends React.Component<ITeam> {
  render() {
    const team = this.props;
    return <div></div>;
  }
}

function Teams() {
  return <div></div>;
}

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
      <Teams />
    </div>
  );
}

export default App;

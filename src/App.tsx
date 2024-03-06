import React from 'react';
import './App.css';
import teams from './CollegeBasketballTeams.json';

const teamsList = teams.teams;

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
    return (
      <div>
        <h3>Name: {team.school}</h3>
        <h4>Mascot: {team.name}</h4>
        <h4>
          Location: {team.city}, {team.state}
        </h4>
      </div>
    );
  }
}

function Teams() {
  return (
    <div>
      {teamsList.map((team) => (
        <Team {...team} />
      ))}
    </div>
  );
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

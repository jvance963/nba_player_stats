import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Players from '../Players/Players';
import MyPlayerList from '../MyPlayerList/MyPlayerList';
import MyTeamList from '../MyTeamList/MyTeamList';
import Home from '../Home/Home';
import Team from '../Team/Team';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link to='/'>
            <span className='navbar-brand navbar'>NBA Roster Manager</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a className='nav-link'>
                  <Link to='/players'>
                    <h3 className='home'>Browse</h3>
                  </Link>
                  <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'>
                  <Link to='/my-players'>
                    <h3 className='home'>MyPlayers</h3>
                  </Link>
                </a>
              </li>
              <li className='nav-item active'>
                <a className='nav-link'>
                  <Link to='/my-teams'>
                    <h3 className='home'>MyTeams</h3>
                  </Link>
                  <span className='sr-only' />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/players' render={() => <Players />} />
          <Route path='/my-players' render={() => <MyPlayerList />} />
          <Route path='/my-teams' render={() => <MyTeamList />} />
          <Route path='/team/:teamId' render={props => <Team {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

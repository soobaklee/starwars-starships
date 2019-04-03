import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { getStarships } from '../../services/sw-api';
import StarShip from '../StarShip/StarShip';

class App extends Component {

  state = {
    // name: null,
    // url: null,
    starships: []
  }

  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const starshipsData = await getStarships();
    console.log(starshipsData.results);
    this.setState({
      starships: starshipsData.results
      // name: starshipsData.results.map(ship => `${ship.name}`),
      // url: starshipsData.results.map(ship => `${ship.url}`)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars Starships</h1>
        </header>
        <Switch>
          <Route
            exact path='/'
            render={() => (
              <div>
                <ul>
                  {this.state.starships.map((ship, idx) =>
                    <li>
                      <Link to={`/starships/${idx}`} key={idx}>{ship.name}</Link>
                    </li>
                  )}
                </ul>
              </div>
            )
            } />
          <Route
            exact path='/starships/:id'
            render={(props) => (
              <StarShip
                {...props}
                starships={this.state.starships}
              />
            )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

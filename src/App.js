import React, { Component } from 'react';
import Station from './Station';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stations: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/stations');
      console.log(process.env.REACT_APP_BACKEND_URL + '/api/v1/stations')
      const stations = await response.json();
      this.setState({ stations });
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>NOAA Sea Level Rise Trends</h1>
        {
          this.state.stations.map(station => {
            return <Station key={station.id} id={station.id} name={station.name} rate={station.slr_rate}/>
          })
        }
      </div>
    );
  }
}

export default App;

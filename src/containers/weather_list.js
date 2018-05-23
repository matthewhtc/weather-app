import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import Chart from '../components/chart'; 
import GoogleMap from '../components/google_map'; 

class WeatherList extends Component {
  renderWeather(cityData) { // arg is a particular city, b/c we are mapping over each obj, which is a city. 

    const name = cityData.city.name; 
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp => temp - 273)); // returns an arr i assume;
    const pressures = cityData.list.map(weather => weather.main.pressure); 
    const humidities = cityData.list.map(weather => weather.main.humidity); 
    const {lon, lat} = cityData.city.coord; // find coord, find the lon and lat properties, and assign to new vars lon and lat.  
    // const lat = cityData.city.coord.lat; 
    // console.log(temps); 

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="°C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    ); 
  }

  render() {
    // curly braces means we make access to a JavaScript variable. 
    // still dunno why but we need to add a unique key if we are adding a list. 
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // remember, we are return state.weather because in our /reducers/index.js, we assigned the WeatherReducer to the 'weather' key.
  /* we have 1 arg, and from that 1 arg, we are only pulling off one property. we can access weather more easily by replacing the parameters
   * as: mapStateToProps({ weather }). it is identifical to saying 'const weather = state.weather'. now we can just do: 
   * return { weather: weather }. 
   * 
   * ...this leads to another refactor: whenver we have a key/value that completely identical, we can shrink it to just: 
   * return { weather } ; */ 
  return { weather }; // { weather } === {weather: weather }
}

export default connect(mapStateToProps)(WeatherList); 


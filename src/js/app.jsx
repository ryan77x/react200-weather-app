import React from 'react';
import CityInformation from './components/CityInformation'
import SearchHistory from './components/SearchHistory'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-left'>RL Weather App</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>

        <div className="btn-group">
            <button type="button" className="btn btn-primary">San Diego</button>
            <button type="button" className="btn btn-primary">New York</button>
            <button type="button" className="btn btn-primary">Washington D.C</button>
            <button type="button" className="btn btn-primary">London</button>
            <button type="button" className="btn btn-primary">Tokyo</button>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="City name"/>
          <div className="input-group-append">
            <button className="btn btn-outline-dark" type="submit">Go!</button>  
          </div>
        </div>        
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInformation/>  
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory/>
          </div>
        </div>
      </div>
    );
  }
}

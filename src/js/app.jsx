import React from 'react';
import CityInformation from './components/CityInformation'
import SearchHistory from './components/SearchHistory'
import Search from './components/Search'

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
        <Search/>       
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

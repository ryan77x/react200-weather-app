import React from 'react';
import CityInformation from './components/CityInformation'
import SearchHistory from './components/SearchHistory'
import Search from './components/Search'
import FavoriteCities from './components/FavoriteCities'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-left'>RL Weather App</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>

        <FavoriteCities/>
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

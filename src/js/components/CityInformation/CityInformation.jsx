import React from 'react';

export default class CityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { weatherData, notFound } = this.props;
    let display = null;

    if (notFound === null){
      display = <div></div>
    }
    else if (notFound){
      display = <div>City name not found.</div>
    }
    else{
      let weatherImage = 'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';

      display =  
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='text-center'>
              <div><span className="city-name"><img src={weatherImage} alt="Weather" width="100" height="100"/>{weatherData.name}</span></div>
              <p className='lat-long-text'>Lat/Long: {weatherData.coord.lat + ', ' + weatherData.coord.lon}</p>
            </div>
          </div>
          <hr/>
          <div className='row'>
            <div className='col-4 text-center'>
              <strong>Temperature</strong>
              <p className='city-info-color'><strong>{Math.round(((parseFloat(weatherData.main.temp)-273.15)*(9/5))+32)+' °F'}</strong></p>
            </div>
            <div className='col-4 text-center'>
              <strong>Pressure</strong>
              <p className='city-info-color'><strong>{weatherData.main.pressure+' hpa'}</strong></p>
            </div>
            <div className='col-4 text-center'>
              <strong>Humidity</strong>
              <p className='city-info-color'><strong>{weatherData.main.humidity+' %'}</strong></p>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 text-center'>
              <strong>Lowest Temp</strong>
              <p className='city-info-color'><strong>{Math.round(((parseFloat(weatherData.main.temp_min)-273.15)*(9/5))+32)+' °F'}</strong></p>
            </div>
            <div className='col-4 text-center'>
              <strong>Highest Temp</strong>
              <p className='city-info-color'><strong>{Math.round(((parseFloat(weatherData.main.temp_max)-273.15)*(9/5))+32)+' °F'}</strong></p>
            </div>
            <div className='col-4 text-center'>
              <strong>Wind Speed</strong>
              <p className='city-info-color'><strong>{(parseFloat(weatherData.wind.speed)*2.237).toFixed(1)+' mph'}</strong></p>
            </div>
          </div>
        </div>
    }

    return (
      <div className='card card-border-color mb-3'>
        <div className='card-header card-header-color card-text'>City Information</div>
        <div className='card-body'>
          {display}
        </div>
      </div>
    );
  }
}

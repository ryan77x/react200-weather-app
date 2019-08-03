import React from 'react';

export default class CityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { weather_data } = this.props;
    let weather_data_empty = false;

    if (Object.keys(weather_data).length > 0){
      weather_data_empty = false;
    }
    else{
      weather_data_empty = true;
    }

    return (
      <div className='card card-border-color mb-3'>
        <div className='card-header card-header-color'>City Information</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-6 text-center'>
                <h6 className='h2 strong'>{weather_data_empty?'':weather_data.name}</h6>
                <p>Lat/Long: {weather_data_empty?'':weather_data.coord.lon + ', ' + weather_data.coord.lat}</p>
              </div>
            </div>
            <hr/>
            <div className='row'>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Temperature</h6>
                <p className='text-success'>{weather_data_empty?'':Math.round(((parseFloat(weather_data.main.temp)-273.15)*(9/5))+32)+' F'}</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Pressure</h6>
                <p className='text-success'>{weather_data_empty?'':weather_data.main.pressure+' hpa'}</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Humidity</h6>
                <p className='text-success'>{weather_data_empty?'':weather_data.main.humidity+' %'}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Lowest Temp</h6>
                <p className='text-success'>{weather_data_empty?'':Math.round(((parseFloat(weather_data.main.temp_min)-273.15)*(9/5))+32)+' F'}</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Highest Temp</h6>
                <p className='text-success'>{weather_data_empty?'':Math.round(((parseFloat(weather_data.main.temp_max)-273.15)*(9/5))+32)+' F'}</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Wind Speed</h6>
                <p className='text-success'>{weather_data_empty?'':(parseFloat(weather_data.wind.speed)*2.237).toFixed(1)+' mph'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

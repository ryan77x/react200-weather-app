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
      <div className='card border-info mb-3'>
        <div className='card-header text-primary bg-info'>City Information</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-6 text-center'>
                <h6 className='h2 strong'>San Diego</h6>
                <p>Lat/Long: 100.11, 120.77</p>
              </div>
            </div>
            <hr/>
            <div className='row'>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Temperature (F)</h6>
                <p className='text-success'>{weather_data_empty?'':weather_data.main.temp+'F'}</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Pressure</h6>
                <p className='text-success'>{weather_data_empty?'':weather_data.main.pressure}</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Humidity</h6>
                <p className='text-success'>{weather_data_empty?'':weather_data.main.humidity+'%'}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Lowest Temp (F)</h6>
                <p className='text-success'>{weather_data_empty?'':weather_data.main.temp_min+'F'}</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Highest Temp (F)</h6>
                <p className='text-success'>{weather_data_empty?'':weather_data.main.temp_max+'F'}</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Wind Speed</h6>
                <p className='text-success'>{weather_data_empty?'':weather_data.wind.speed+'mph'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

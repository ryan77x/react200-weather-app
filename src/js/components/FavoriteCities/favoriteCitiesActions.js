import axios from 'axios';

  export function search(input) {
    let url = '/api/weather_data/?q=' + input;

    return {
      type: 'GET_WEATHER',
      payload: axios.get(url)
    };
  }
  
  
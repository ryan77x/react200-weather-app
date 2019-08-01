import axios from 'axios';

export function updateSearchInput(input) {
    return {
      type: 'UPDATE_SEARCH_INPUT',
      payload: { input }
    };
  }
  
  export function search(input) {
    let WEATHER_API_KEY = '545cc33d0292888a63ee817d39ada74c';

    return {
      type: 'GET_WEATHER',
      payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q='+input+'&APPID='+WEATHER_API_KEY)
    };
  }
  
  
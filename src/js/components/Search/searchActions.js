import axios from 'axios';

export function updateSearchInput(input) {
    return {
      type: 'UPDATE_SEARCH_INPUT',
      payload: { input }
    };
  }
  
  export function search(input) {
    let url = '/api/weather_data/?q=' + input;

    return {
      type: 'GET_WEATHER',
      payload: axios.get(url)
    };
  }
  
  
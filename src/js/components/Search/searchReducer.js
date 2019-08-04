const defaultState = {
  cityNameInput: '',
  searchHistory: [],
  weatherData: {}
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {
      return {
        ...state,
        cityNameInput: payload.input
      };
    }

    case 'GET_WEATHER_FULFILLED': {
      let dateTime = new Date();
      let time = dateTime.toLocaleTimeString(('en-GB'));
      let date = dateTime.toLocaleDateString();

      return {
        cityNameInput: payload.data.name,
        searchHistory: [{id: state.searchHistory.length + 1, cityName: payload.data.name, dateTime: date + ' ' + time}, ...state.searchHistory],
        weatherData: payload.data
      };  
    }

    default: {
      return state;
    }
  }
}

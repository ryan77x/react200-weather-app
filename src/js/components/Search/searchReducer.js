const defaultState = {
  input: '',
  searchHistory: [],
  weather_data: {}
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {
      return {
        ...state,
        input: payload.input
      };
    }

    case 'GET_WEATHER_FULFILLED': {
      let dateTime = new Date();
      let time = dateTime.toLocaleTimeString(('en-GB'));
      let date = dateTime.toLocaleDateString();

      return {
        input: '',
        searchHistory: [{id: state.searchHistory.length + 1, cityName: payload.data.name, dateTime: date + ' ' + time}, ...state.searchHistory],
        weather_data: payload.data
      };  
    }

    default: {
      return state;
    }
  }
}

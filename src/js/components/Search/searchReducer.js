const defaultState = {
  input: '',
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
      return {
        input: '',
        weather_data: payload.data
      };
    }

    default: {
      return state;
    }
  }
}

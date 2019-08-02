const defaultState = {
  weather_data: {}
};

export default function favoriteCitiesReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_WEATHER_FULFILLED': {
      return {
        weather_data: payload.data
      };
    }

    default: {
      return state;
    }
  }
}

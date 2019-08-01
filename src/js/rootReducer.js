import { combineReducers } from 'redux';
import cityInformationReducer from './components/CityInformation/cityInformationReducer'
import searchHistory from './components/SearchHistory/searchHistoryReducer'

const rootReducer = combineReducers({
    cityInformation: cityInformationReducer,
    searchHistory: searchHistory
});

export default rootReducer;

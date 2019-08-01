import { combineReducers } from 'redux';
import cityInformationReducer from './components/CityInformation/cityInformationReducer'
import searchHistoryReducer from './components/SearchHistory/searchHistoryReducer'
import searchReducer from './components/Search/searchReducer'

const rootReducer = combineReducers({
    cityInformation: cityInformationReducer,
    searchHistory: searchHistoryReducer,
    search: searchReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import cityInformationReducer from './components/CityInformation/cityInformationReducer'
import searchHistoryReducer from './components/SearchHistory/searchHistoryReducer'
import searchReducer from './components/Search/searchReducer'
import favoriteCitiesReducer from './components/FavoriteCities/favoriteCitiesReducer'

const rootReducer = combineReducers({
    cityInformation: cityInformationReducer,
    searchHistory: searchHistoryReducer,
    search: searchReducer,
    favoriteCities: favoriteCitiesReducer
});

export default rootReducer;

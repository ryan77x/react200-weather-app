import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    cityNameInput: store.search.cityNameInput,
    weatherData: store.search.weatherData
  };
}

export default connect(mapStoreToProps)(Search);

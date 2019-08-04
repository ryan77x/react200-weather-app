import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
  return {
    weatherData: store.search.weatherData
  };
}

export default connect(mapStoreToProps)(CityInformation);
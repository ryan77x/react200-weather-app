import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
  return {
    weather_data: store.search.weather_data
  };
}

export default connect(mapStoreToProps)(CityInformation);
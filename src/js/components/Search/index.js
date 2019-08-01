import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    input: store.search.input,
    weather_data: store.search.weather_data
  };
}

export default connect(mapStoreToProps)(Search);

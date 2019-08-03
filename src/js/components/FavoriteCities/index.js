import { connect } from 'react-redux';
import FavoriteCities from './FavoriteCities';

function mapStoreToProps(store) {
  return {
    //weather_data: store.search.weather_data
  };
}

export default connect(mapStoreToProps)(FavoriteCities);

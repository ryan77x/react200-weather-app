import React from 'react';

// We'll need to import all those action creators.
import {
  search
} from './favoriteCitiesActions';

export default class FavoriteCities extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleButtons = this.handleButtons.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchInput(value));
  }

  handleButtons(city) {
    const { dispatch } = this.props;
    dispatch(search(city));
  }

  render() {
    //const { input, weather_data } = this.props;

    return (
      <div className="btn-group">
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={ () => this.handleButtons("San Diego") } >San Diego
        </button>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={ () => this.handleButtons("New York") } >New York
        </button>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={ () => this.handleButtons("Washington") } >Washington D.C
        </button>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={ () => this.handleButtons("London") } >London
        </button>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={ () => this.handleButtons("Tokyo") } >Tokyo
        </button>
      </div>
    );
  }
}

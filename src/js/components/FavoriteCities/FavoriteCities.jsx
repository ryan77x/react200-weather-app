import React from 'react';

import {
  search
} from '../Search/searchActions';

export default class FavoriteCities extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtons = this.handleButtons.bind(this);
  }

  handleButtons(city) {
    const { dispatch } = this.props;
    dispatch(search(city));
  }

  render() {

    return (
      <div className="btn-group">
        <button 
          type="button" 
          className="btn favorite-city-btn-color favorite-city-btn-text"
          onClick={ () => this.handleButtons("San Diego") } >San Diego
        </button>
        <button 
          type="button" 
          className="btn favorite-city-btn-color favorite-city-btn-text"
          onClick={ () => this.handleButtons("New York") } >New York
        </button>
        <button 
          type="button" 
          className="btn favorite-city-btn-color favorite-city-btn-text"
          onClick={ () => this.handleButtons("Washington") } >Washington D.C
        </button>
        <button 
          type="button" 
          className="btn favorite-city-btn-color favorite-city-btn-text"
          onClick={ () => this.handleButtons("London") } >London
        </button>
        <button 
          type="button" 
          className="btn favorite-city-btn-color favorite-city-btn-text"
          onClick={ () => this.handleButtons("Tokyo") } >Tokyo
        </button>
      </div>
    );
  }
}

import React from 'react';

import {
  updateSearchInput,
  search
} from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleGoButton = this.handleGoButton.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchInput(value));
  }

  handleGoButton() {
    const { cityNameInput, dispatch } = this.props;

    if (cityNameInput.trim() !== ''){
      dispatch(search(cityNameInput));
    }
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      const { cityNameInput, dispatch } = this.props;

      if (cityNameInput.trim() !== ''){
        dispatch(search(cityNameInput));
      }
    }
  }
  
  render() {
    const { cityNameInput } = this.props;

    return (
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control search-text" 
          placeholder='City name search examples: "san diego" or "san diego, us" or "92111, us"'
          value={ cityNameInput }
          onChange={ this.handleSearchInput }
          onKeyPress={ this.handleKeyPress }
          />
        <div className="input-group-append">
          <button 
            className="btn go-btn-border-color search-text" 
            type="button" 
            onClick={ this.handleGoButton } >Go!
          </button>  
        </div>
      </div>  
    );
  }
}

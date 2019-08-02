import React from 'react';

// We'll need to import all those action creators.
import {
  updateSearchInput,
  search
} from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleGoButton = this.handleGoButton.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchInput(value));
  }

  handleGoButton() {
    const { input, dispatch } = this.props;

    if (input.trim() !== ''){
      dispatch(search(input));
    }
  }

  render() {
    const { input, weather_data } = this.props;

    return (
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="City name"
          value={ input }
          onChange={ this.handleSearchInput }
          />
        <div className="input-group-append">
          <button 
            className="btn btn-outline-dark" 
            type="button" 
            onClick={ this.handleGoButton } >Go!
          </button>  
        </div>
      </div>  
    );
  }
}

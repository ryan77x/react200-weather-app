import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { searchHistory } = this.props;
    let display = null;

    if (searchHistory.length > 0){
      display =
        <table className='table table-sm table-hover table-striped'>
          <tbody>
          {
            searchHistory.map(item => (
              <tr key={ item.id }>
                <td style={ { "width": "70%" } }>{ item.cityName }</td>
                <td style={ { "width": "30%" } }>{ item.dateTime }</td>
              </tr>
            ))
          }            
          </tbody>  
        </table>
    }
    else{
      display = <div></div>
    }
    
    return (
      <div className='card card-border-color mb-3'>
        <div className='card-header card-header-color card-text'>Search History</div>
        <div className='card-body'>
          {display}
        </div>
      </div>
    );
  }
}

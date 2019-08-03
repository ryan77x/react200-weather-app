import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { searchHistory } = this.props;

    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-primary bg-info'>Search History</div>
        <div className='card-body'>
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

        </div>
      </div>
    );
  }
}

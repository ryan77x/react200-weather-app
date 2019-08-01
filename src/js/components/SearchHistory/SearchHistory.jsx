import React from 'react';

// We'll need to import all those action creators.
import {
  updateIncomeDescription,
  updateIncomeAmount,
  addIncome
} from './searchHistoryActions';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

    // Here we're binding these methods to the context
    // of the components. This only has to be done,
    // because these methods are called back by
    // event emitters (which lose context).
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleAmountInput = this.handleAmountInput.bind(this);
    this.handleAddIncome = this.handleAddIncome.bind(this);
  }

  handleDescriptionInput(event) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeDescription(value));
  }

  handleAmountInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeAmount(value));
  }

  handleAddIncome() {
    const { description, amount, dispatch } = this.props;

    if (!isNaN(amount) && amount.trim() !== ''){
      dispatch(addIncome(description, amount));
    }
  }

  render() {
    // These values were provided by connect()
    //const { description, amount, lineItems } = this.props;
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-primary bg-info'>Search History</div>
        <div className='card-body'>

            <table className='table table-sm table-hover table-striped'>
 
              <tbody>
            
                  
                    <tr>
                      <td style={ { "width": "70%" } }>San Diego</td>
                      <td style={ { "width": "30%" } }>07/31/2019 <br/>17:15:00</td>
                    </tr>
                    <tr>
                      <td style={ { "width": "70%" } }>San Diego</td>
                      <td style={ { "width": "30%" } }>07/31/2019 <br/>17:15:00</td>
                    </tr>                  
                    <tr>
                      <td style={ { "width": "70%" } }>San Diego</td>
                      <td style={ { "width": "30%" } }>07/31/2019 <br/>17:15:00</td>
                    </tr>
                    <tr>
                      <td style={ { "width": "70%" } }>San Diego</td>
                      <td style={ { "width": "30%" } }>07/31/2019 <br/>17:15:00</td>
                    </tr>
                    <tr>
                      <td style={ { "width": "70%" } }>San Diego</td>
                      <td style={ { "width": "30%" } }>07/31/2019 <br/>17:15:00</td>
                    </tr>                                                       
                 
              
              </tbody>
            </table>

        </div>
      </div>
    );
  }
}

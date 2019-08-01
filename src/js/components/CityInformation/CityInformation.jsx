import React from 'react';

// We'll need to import all those action creators.
import {
  updateExpenseDescription,
  updateExpenseAmount,
  addExpense
} from './cityInformationActions';

export default class ExpenseEntries extends React.Component {
  constructor(props) {
    super(props);

    // Here we're binding these methods to the context
    // of the components. This only has to be done,
    // because these methods are called back by
    // event emitters (which lose context).
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleAmountInput = this.handleAmountInput.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleDescriptionInput(event) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateExpenseDescription(value));
  }

  handleAmountInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateExpenseAmount(value));
  }

  handleAddExpense() {
    const { description, amount, dispatch } = this.props;

    if (!isNaN(amount) && amount.trim() !== ''){
      dispatch(addExpense(description, amount));
    }
  }

  render() {
    // These values were provided by connect()
    //const { description, amount, lineItems } = this.props;
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-primary bg-info'>City Information</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-6 text-center'>
                <h6 className='h2 strong'>San Diego</h6>
                <p>Lat/Long: 100.11, 120.77</p>
              </div>
            </div>
            <hr/>
            <div className='row'>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Temperature (F)</h6>
                <p className='text-success'>75.12F</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Pressure</h6>
                <p className='text-success'>555</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Humidity</h6>
                <p className='text-success'>80%</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Lowest Temp (F)</h6>
                <p className='text-success'>65.11F</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Highest Temp (F)</h6>
                <p className='text-success'>85.55F</p>
              </div>
              <div className='col-4 text-center'>
                <h6 className='h6 strong'>Wind Speed</h6>
                <p className='text-success'>8.02mph</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

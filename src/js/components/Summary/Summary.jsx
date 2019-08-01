import React from 'react';

function calculateSum(lineItems) {
  return lineItems.reduce((acc, lineItem) => acc + lineItem.amount, 0);
}

function formatCurrency(amount) {
  return amount.toLocaleString("en", {style: "currency", currency: "USD"});
}

class Summary extends React.Component {
  render() {
    const { incomeItems, expenseItems } = this.props;

    let incomeTotalHelper = calculateSum(incomeItems);
    let expenseTotalHelper = calculateSum(expenseItems);
    let incomeTotal = Math.round(incomeTotalHelper*100) / 100;
    let expenseTotal = Math.round(expenseTotalHelper*100) / 100;
    let difference = Math.round((incomeTotalHelper - expenseTotalHelper)*100) / 100;

    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>Summary</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Total Income</h6>
                <p>{ formatCurrency(incomeTotal) }</p>
              </div>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Total Expenses</h6>
                <p>{ formatCurrency(expenseTotal) }</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Left after spending</h6>
                <p>{ formatCurrency(difference) }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;

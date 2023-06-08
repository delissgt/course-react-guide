import './ExpenseItem.css'

function ExpenseItem() {
  return (
      <div className="expense-item">
        <div>Date today 8 June 2023</div>
        <div className="expense-item__description">
          <h2>New Car</h2>
          <div className="expense-item__price">$100.50</div>
        </div>
      </div>
  );
}

export default ExpenseItem;
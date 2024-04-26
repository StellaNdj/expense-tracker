const Tracker = ({expenses, handleDelete, total, devise}) => {

  return (
    <div className='expense-container'>
      <div className='expense-table'>
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.desc}</td>
                <td>{expense.amount} {devise}</td>
                <td>{expense.category}</td>
                <td><button className='delete-btn' onClick={() => handleDelete(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='total-amount'>
          <strong>Total: </strong>
          <span>{total}{devise}</span>
        </div>
      </div>

    </div>
  )
}

export default Tracker;

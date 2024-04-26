import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ExpenseContext } from '../contexts/expenseContext';

const AddExpense = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm();
  const { createExpense, trackTotal } = useContext(ExpenseContext);

  const addExpense = (formData) => {
    createExpense(formData);
    trackTotal('add', parseInt(formData.amount));
    reset();
  };

  return (
    <div>
      <h1>Expense tracker</h1>

      <div>
        <h2>Add a expense</h2>
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit(addExpense)}>
            <label>Description</label>
            <input type="text" {...register('desc', {required: true})}></input>
            {errors.desc && <p className="form-errors">Description is required</p>}
            <label>Amount</label>
            <input type="number" {...register('amount', {required: true})}></input>
            {errors.amount && <p className="form-errors">Amount is required</p>}
            <label>Category</label>
            <select {...register('category', {required: true})}>
              <option value="" disabled selected>Select a category</option>
              <option>Groceries</option>
              <option>Utilities</option>
              <option>Entertainment</option>
            </select>
            {errors.category && <p className="form-errors">Category is required</p>}
            <button>Add expense</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddExpense;

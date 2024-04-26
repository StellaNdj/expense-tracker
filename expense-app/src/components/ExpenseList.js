import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../contexts/expenseContext";
import { useForm } from "react-hook-form";
import Tracker from "./Tracker";

const ExpenseList = () => {
  const { expenses, deleteExpense, total, trackTotal } = useContext(ExpenseContext);
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [filteredExpenses, setFilteredExpenses]  = useState(null);
  const [totalFiltered, setTotalFiltered] = useState(null);
  const [devise, setDevise] = useState('€');
  
  const filteredExpense = (formData) => {
    const categorieSelected = formData.category;
    if(formData.category === 'All categories') {
      setFilteredExpenses(expenses);
      setTotalFiltered(total);
    } else {
      const expenses_filtred = expenses.filter((expense) => expense.category === categorieSelected);
      setFilteredExpenses(expenses_filtred);
    }
  }

  useEffect(() => {
    if (filteredExpenses !== null) {
      const amount_filtred = filteredExpenses.reduce((total, expense) => total + parseInt(expense.amount), 0);
      setTotalFiltered(amount_filtred);
    }
  }, [filteredExpenses])

  const handleDeleteFiltered = (index) => {
    const {amount} = filteredExpenses[index];
    const deleteIndex = expenses.findIndex(expense => expense === filteredExpenses[index]);
    trackTotal('remove', parseInt(amount));
    deleteExpense(deleteIndex);
  }

  const handleDelete = (index) => {
    const {amount} = expenses[index]
    trackTotal('remove', parseInt(amount));
    deleteExpense(index);
  }

  const deviseChosen = (formData) => {
    setDevise(formData.devise.split(" ")[2]);
  }

  return (
    <div>
      <div className="smaller-forms-container">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit(filteredExpense)}>
            <label>Filter by category</label>
            <select defaultValue={'All categories'}{...register('category', {required: true})}>
                <option value="All categories">All the categories</option>
                <option>Groceries</option>
                <option>Utilities</option>
                <option>Entertainment</option>
            </select>
            {errors.category && <p className="form-errors">Category is required</p>}
            <button>Filter</button>
          </form>
        </div>

        <div className="form-container">
          <form className="form" onSubmit={handleSubmit(deviseChosen)}>
            <label>Devise</label>
            <select defaultValue={'Euro - €'}{...register('devise', {required: true})}>
                <option value="Euro - €">Euro - €</option>
                <option>Dollar - $</option>
                <option>Pounds - £</option>
            </select>
            {errors.category && <p>Devise is required</p>}
            <button>Set devise</button>
          </form>
        </div>

      </div>



      {filteredExpenses !== null ? (
        <div>
          <div>
            <h2>Expense List</h2>
            <Tracker expenses={filteredExpenses} handleDelete={handleDeleteFiltered} total={totalFiltered} devise={devise}></Tracker>
          </div>
        </div>
      ): expenses.length > 0 ? (
        <div>
          <h2>Expense List</h2>
          <Tracker expenses={expenses} handleDelete={handleDelete} total={total} devise={devise}></Tracker>
        </div>
      ) : (
        <h2>No expenses yet</h2>
      )}

    </div>
  )
};

export default ExpenseList;

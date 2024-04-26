import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({children}) => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0)

  const createExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const deleteExpense = (deleteIndex) => {
    expenses.splice(deleteIndex, 1)
    setExpenses(expenses);
  }

  const trackTotal = (action, expense) => {
    if(action === 'add') {
      return setTotal(prevTotal => prevTotal + expense);
    } else if (action === 'remove') {
      return setTotal(prevTotal => prevTotal - expense);
    }
  }

  return (
    <ExpenseContext.Provider value={{expenses, createExpense, deleteExpense, trackTotal, total}}>
      {children}
    </ExpenseContext.Provider>
  )
}

import './App.css';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
      <AddExpense></AddExpense>
      <ExpenseList></ExpenseList>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExpenseContextProvider } from './contexts/expenseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ExpenseContextProvider>
      <App />
    </ExpenseContextProvider>
);

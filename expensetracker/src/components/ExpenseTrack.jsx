import React, { useState, useEffect } from "react";
import AddExpenseForm from "./AddExpenseForm";
import AddIncomeForm from "./AddIncomeForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { SnackbarProvider } from "notistack";

const ExpenseTrack = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <h1>Expense Tracker</h1>
        <AddIncomeForm />
        <AddExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} setExpenses={setExpenses} />
        <ExpenseSummary expenses={expenses} />
      </div>
    </SnackbarProvider>
  );
};

export default ExpenseTrack;

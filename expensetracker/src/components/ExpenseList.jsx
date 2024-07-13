import React, { useContext } from "react";
import { WalletContext } from "./WalletContext";
import { useSnackbar } from "notistack";
import "./expensetracker.css";

const ExpenseList = ({ expenses, setExpenses }) => {
  const { balance, setBalance } = useContext(WalletContext);
  const { enqueueSnackbar } = useSnackbar();

  const deleteExpense = (id) => {
    const expenseToDelete = expenses.find((exp) => exp.id === id);
    setBalance(balance + expenseToDelete.amount);
    setExpenses(expenses.filter((exp) => exp.id !== id));
    enqueueSnackbar("Expense deleted successfully!", { variant: "success" });
  };

  const editExpense = (id, updatedExpense) => {
    const updatedExpenses = expenses.map((exp) =>
      exp.id === id ? updatedExpense : exp
    );
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex justify-center items-center gap-10 m-2 p-3"
        >
          <div>
            <h2 className="text-2xl">{expense.title}</h2>
            <p>Date: {expense.date}</p>
          </div>
          <p>
            <span>&#x20B9;</span>
            {expense.amount}
          </p>

          <button
            onClick={() => deleteExpense(expense.id)}
            className="incomebtn"
          >
            Delete
          </button>
          <button
            onClick={() => editExpense(expense.id, expense)}
            className="expensebtn"
          >
            Edit
          </button>
          {/* Add Edit Functionality Here */}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;

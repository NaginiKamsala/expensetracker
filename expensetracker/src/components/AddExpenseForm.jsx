import React, { useState, useContext } from "react";
import { WalletContext } from "./WalletContext";
import { useSnackbar } from "notistack";
import "./expensetracker.css";

const AddExpenseForm = ({
  isAddExpense,
  setisAddExpense,
  setExpenseList,
  expenseList,
}) => {
  const { balance, setBalance } = useContext(WalletContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  let expenseMoney = localStorage.getItem("ExpenseAmount");
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseAmount = parseFloat(amount);

    if (expenseAmount > balance) {
      enqueueSnackbar("Insufficient balance!", { variant: "error" });
      return;
    }

    addExpense({ title, amount: expenseAmount, category, date });
    setBalance(balance - expenseAmount);
    localStorage.setItem("ExpenseAmount", expenseMoney + expenseAmount);
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const addExpense = (expense) => {
    setExpenseList([...expenseList, { ...expense, id: Date.now() }]);
    localStorage.setItem("expenses", JSON.stringify(expenseList));
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <form
          className=" border border-black flex flex-col w-[538px] h-[335px] bg-white"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-4xl text-black my-4">Add Expenses</h1>

          <div>
            <input
              className="inline-block p-2 m-1 border border-black"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              className="inline-block p-2 m-1 border border-black"
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="inline-block p-2 m-1 border border-black"
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <input
              className="inline-block p-2 m-1 border border-black"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-4 mt-10 justify-center">
            <button
              className="border px-4 py-2 rounded-lg text-black bg-[#F4BB4A]"
              type="submit"
            >
              Add Expense
            </button>
            <button
              onClick={() => setisAddExpense(false)}
              className="bg-white border px-4 py-2 rounded-lg text-black"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpenseForm;

import React, { useState, useEffect, useContext } from "react";
import "./expensetracker.css";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import PieChart from "./PieChart";
import ExpenseBarChart from "./ExpenseBarchart";
import Labels from "./labels";
import AddExpenseModal from "./modals/AddExpenseModal";
import AddIncomeModal from "./modals/AddIncomeModal";
import { WalletContext } from "./WalletContext";
const ExpenseTracker = () => {
  const { balance, setBalance } = useContext(WalletContext);
  const [isAddExpense, setisAddExpense] = useState(false);
  const [isAddIncome, setIsAddIncome] = useState(false);
  const [walletBalance, setWalletBalance] = useState(() => {
    const storedBalance = localStorage.getItem("walletBalance");
    const parsedBalance = parseFloat(storedBalance);
    return isNaN(parsedBalance) ? 5000 : parsedBalance;
  });
  const [expenseAmount, setExpenseAmount] = useState(() => {
    const storedExpense = localStorage.getItem("ExpenseAmount");
    return storedExpense ? parseFloat(storedExpense) : 500;
  });
  const sampleExpenses = [
    {
      id: 1,
      title: "Grocery Shopping",
      amount: 50,
      category: "Food",
      date: "2023-07-01",
    },

    {
      id: 3,
      title: "Gym Membership",
      amount: 30,
      category: "Entertainment",
      date: "2023-07-03",
    },
    {
      id: 4,
      title: "Dinner at Restaurant",
      amount: 70,
      category: "Food",
      date: "2023-07-04",
    },

    {
      id: 6,
      title: "Car Fuel",
      amount: 60,
      category: "Travel",
      date: "2023-07-06",
    },
    {
      id: 7,
      title: "Internet Bill",
      amount: 40,
      category: "Entertainment",
      date: "2023-07-07",
    },
    {
      id: 8,
      title: "New Clothes",
      amount: 150,
      category: "Travel",
      date: "2023-07-08",
    },
    {
      id: 9,
      title: "Movie Tickets",
      amount: 25,
      category: "Entertainment",
      date: "2023-07-09",
    },
    {
      id: 10,
      title: "Coffee",
      amount: 5,
      category: "Food",
      date: "2023-07-10",
    },
  ];
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? sampleExpenses : [];
    //return sampleExpenses;
  });

  useEffect(() => {
    localStorage.setItem("walletBalance", walletBalance);
    localStorage.setItem("ExpenseAmount", expenseAmount);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [walletBalance, expenseAmount, expenses]);

  return (
    <div className="main-div">
      <h1 className="font-bold text-4xl text-white my-4">Expense Tracker</h1>
      <div className="second-div">
        <div className="div1">
          <div className="walletbalance">
            <h2>
              Wallet Balance : <span>&#x20B9;</span> {balance}
            </h2>
            <button className="incomebtn" onClick={() => setIsAddIncome(true)}>
              + Add Income
            </button>
            {isAddIncome && (
              <AddIncomeModal
                isAddIncome={isAddIncome}
                setisAddIncome={setIsAddIncome}
                setwalletBalance={setWalletBalance}
              />
            )}
          </div>
          <div className="walletbalance">
            <h2>
              Expenses : <span>&#x20B9;</span> {expenseAmount}
            </h2>
            <button
              onClick={() => setisAddExpense(true)}
              className="expensebtn"
            >
              + Add Expense
            </button>
            {isAddExpense && (
              <AddExpenseModal
                isAddExpense={isAddExpense}
                setisAddExpense={setisAddExpense}
                setExpenseList={setExpenses}
                expenseList={expenses}
              />
            )}
          </div>
          <div className="expensesummary">
            <ExpenseSummary expenses={expenses} />
            <Labels />
          </div>
        </div>

        <div className=" flex justify-center gap-14">
          <div>
            <h1 className="text-3xl">Recent Transactions</h1>
            <div className="transactions">
              <ExpenseList expenses={expenses} setExpenses={setExpenses} />
            </div>
          </div>
          <div>
            <h1 className="text-3xl">Top Expenses</h1>
            <div className="barchart">
              <ExpenseBarChart expenses={sampleExpenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;

import { useState, useEffect, createContext } from "react";
import Navbar from "../../Navbar/Navbar";
import HeroSection from "../../HeroSection/HeroSection";
import AllTransactions from "../../Transactions/AllTransactions";
import AddIncomeModal from "../../Modalpopup/AddIncomeModal";
import AddEditExpenseModal from "../../Modalpopup/AddEditExpenseModal";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

const calculateCategoryStats = (expenseList) => {
  return expenseList.reduce(
    (acc, item) => {
      acc.spends[item.category] =
        (acc.spends[item.category] || 0) + Number(item.price);
      return acc;
    },
    {
      spends: { food: 0, entertainment: 0, travel: 0, other: 0 },
    }
  );
};

const Home = () => {
  const [expenseList, setExpenseList] = useLocalStorage("expenses", []);
  const [balance, setBalance] = useLocalStorage("balance", 5000);

  // for modals
  const [isOpenBalance, setIsOpenBalance] = useState(false);
  const [isOpenExpense, setIsOpenExpense] = useState(false);

  const { spends: categorySpends } = calculateCategoryStats(expenseList);

  const expense = expenseList.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handleAddIncome = () => {
    setIsOpenBalance(true);
  };
  const handleAddEditExpense = () => {
    setIsOpenExpense(true);
  };

  return (
    <div>
      <Navbar />
      <HeroSection
        balance={balance}
        expense={expense}
        handleAddIncome={handleAddIncome}
        handleAddEditExpense={handleAddEditExpense}
        categorySpends={categorySpends}
      />
      <AllTransactions
        transactions={expenseList}
        editTransactions={setExpenseList}
        balance={balance}
        setBalance={setBalance}
        categorySpends={categorySpends}
      />

      {/* modals */}
      <AddIncomeModal
        isOpen={isOpenBalance}
        setIsOpen={setIsOpenBalance}
        setBalance={setBalance}
      />
      <AddEditExpenseModal
        isOpen={isOpenExpense}
        setIsOpen={setIsOpenExpense}
        expenseList={expenseList}
        setExpenseList={setExpenseList}
        balance={balance}
        setBalance={setBalance}
      />
    </div>
  );
};

export default Home;

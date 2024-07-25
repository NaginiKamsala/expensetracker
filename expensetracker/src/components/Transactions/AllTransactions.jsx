import styles from "./AllTransactions.module.css";
import RecentTransactions from "./RecentTransactionSection";
import ExpenseBarChart from "./ExpenseBarchart";

const AllTransactions = ({
  transactions,
  editTransactions,
  balance,
  setBalance,
  categorySpends,
}) => {
  return (
    <div className={styles.transaction_expense_wrapper}>
      <RecentTransactions
        transactions={transactions}
        editTransactions={editTransactions}
        balance={balance}
        setBalance={setBalance}
      />
      <ExpenseBarChart categorySpends={categorySpends} />
    </div>
  );
};

export default AllTransactions;

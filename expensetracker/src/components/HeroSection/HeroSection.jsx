import Card from "./Card";
import styles from "./HeroSection.module.css";
import EnpensePieChart from "./ExpensesPieChart";

const HeroSection = ({
  balance,
  expense,
  handleAddIncome,
  handleAddEditExpense,
  categorySpends,
}) => {
  return (
    <>
      <div className={styles.large_devices}>
        {/* view on large devices */}
        <div className={styles.hero_section_wrapper}>
          <Card
            cardTitle="Wallet Balance"
            buttonTitle="Income"
            amount={balance}
            handleClick={handleAddIncome}
          />

          <Card
            cardTitle="Expenses"
            buttonTitle="Expense"
            amount={expense}
            handleClick={handleAddEditExpense}
          />

          <EnpensePieChart expenses={categorySpends} />
        </div>
      </div>
      <div className={styles.medium_devices}>
        <div className={styles.medium_devices_wrapper}>
          <div className={styles.medium_devices_card_wrapper}>
            <Card
              cardTitle="Wallet Balance"
              buttonTitle="Income"
              amount={balance}
              handleClick={handleAddIncome}
            />

            <Card
              cardTitle="Expenses"
              buttonTitle="Expense"
              amount={expense}
              handleClick={handleAddEditExpense}
            />
          </div>
          <EnpensePieChart expenses={categorySpends} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

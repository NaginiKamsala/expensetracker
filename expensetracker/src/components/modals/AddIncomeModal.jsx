import AddIncomeForm from "../AddIncomeForm";
const AddIncomeModal = ({ isAddIncome, setisAddIncome, setwalletBalance }) => {
  return (
    <div className="addExpense">
      <AddIncomeForm
        isAddIncome={isAddIncome}
        setisAddIncome={setisAddIncome}
        setwalletBalance={setwalletBalance}
      />
    </div>
  );
};

export default AddIncomeModal;

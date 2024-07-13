import AddExpenseForm from "../AddExpenseForm";
const AddExpenseModal = ({
  isAddExpense,
  setisAddExpense,
  setExpenseList,
  expenseList,
}) => {
  return (
    <div className="addExpense">
      <AddExpenseForm
        isAddExpense={isAddExpense}
        setisAddExpense={setisAddExpense}
        setExpenseList={setExpenseList}
        expenseList={expenseList}
      />
    </div>
  );
};

export default AddExpenseModal;

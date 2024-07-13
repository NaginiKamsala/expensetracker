import React, { useState, useContext } from "react";
import { WalletContext } from "./WalletContext";
import { useSnackbar } from "notistack";

const AddIncomeForm = ({ isAddIncome, setisAddIncome, setwalletBalance }) => {
  const { balance, setBalance } = useContext(WalletContext);
  const [amount, setAmount] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const incomeAmount = parseFloat(amount);

    setBalance(balance + incomeAmount);
    setAmount("");
    enqueueSnackbar("Income added successfully!", { variant: "success" });
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <form
        onSubmit={handleSubmit}
        className=" border border-black flex flex-col w-[538px] h-[335px] bg-white"
      >
        <h1 className="font-bold text-4xl text-black my-4">Add Income</h1>
        <div>
          <input
            className="inline-block p-2 m-1 border border-black w-1/2 justify-center items-center"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-4 mt-10 justify-center">
          <button
            className="border px-4 py-2 rounded-lg text-black bg-[#F4BB4A]"
            type="submit"
          >
            Add Income
          </button>
          <button
            onClick={() => setisAddIncome(false)}
            className="bg-white border px-4 py-2 rounded-lg text-black"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddIncomeForm;

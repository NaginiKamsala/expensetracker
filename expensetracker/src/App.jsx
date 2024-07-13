import image from "./assets/Logo.svg";

import ExpenseTracker from "./components/expensetracker";
import ExpenseTrack from "./components/ExpenseTrack";
function App() {
  return (
    <>
      <div>
        <img src={image} alt="logo" />
        <ExpenseTracker />
      </div>
    </>
  );
}

export default App;

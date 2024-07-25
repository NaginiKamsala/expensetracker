import image from "./assets/Logo.svg";
import { SnackbarProvider } from "notistack";

import Home from "./components/Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={image} alt="logo" />
        <SnackbarProvider>
          <div className="app_wrapper">
            <Home />
          </div>
        </SnackbarProvider>
      </div>
    </>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Slide, ToastContainer } from "react-toastify";
import App from "./App.jsx";
import "./assets/styles/mainStyle.scss";
import { MainContextProvider } from "./contexts/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Slide}
        closeButton={false}
      />
    </MainContextProvider>
  </StrictMode>
);

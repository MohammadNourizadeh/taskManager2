import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/mainStyle.scss";
import { MainContextProvider } from "./contexts/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </StrictMode>
);

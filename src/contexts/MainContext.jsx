import { createContext, useState } from "react";

const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  // state
  const [tasks, setTasks] = useState([]);

  return (
    <MainContext.Provider value={{ tasks, setTasks }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

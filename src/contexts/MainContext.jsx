import { createContext, useState } from "react";

const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  // state
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <MainContext.Provider
      value={{ tasks, setTasks, isFormOpen, setIsFormOpen }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

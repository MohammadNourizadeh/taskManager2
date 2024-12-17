import { createContext } from "react";

const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};

export default MainContext;

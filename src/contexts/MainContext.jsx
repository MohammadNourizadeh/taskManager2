import { createContext, useState } from "react";

const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  // state
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("my day");
  const [searchInputVal, setSearchInputVal] = useState("");
  const [appSetting, setAppSetting] = useState({});
  const [newAppSetting, setNewAppSetting] = useState({});

  return (
    <MainContext.Provider
      value={{
        tasks,
        setTasks,
        isFormOpen,
        setIsFormOpen,
        selectedItem,
        setSelectedItem,
        searchInputVal,
        setSearchInputVal,
        appSetting,
        setAppSetting,
        newAppSetting,
        setNewAppSetting,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

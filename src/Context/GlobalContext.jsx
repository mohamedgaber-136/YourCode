import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const lang = "ar";

  return (
    <GlobalContext.Provider value={{lang}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

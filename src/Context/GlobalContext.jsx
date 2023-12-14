import { createContext,  useState } from "react";
import { useTranslation } from "react-i18next";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [trans, i18n] = useTranslation("global");
  const [checkLang, setLang] = useState(true);
  const handleLang = (lang) => {
    setLang(false);
    if (!checkLang) {
      setLang(true);
    }
    i18n.changeLanguage(lang);
  };


  return (
    <GlobalContext.Provider value={{ checkLang, trans, handleLang }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

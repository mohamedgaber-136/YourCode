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

  const toIndiaDigits = function (str) {
    var id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return str.replace(/[0-9]/g, function (w) {
      return id[+w];
    });
  };

  return (
    <GlobalContext.Provider value={{ checkLang, trans, handleLang,toIndiaDigits }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

import { useContext, createContext, useState, useMemo } from "react";
const HomePageContext = createContext();
export const HomePageProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const generateImage = () => {
    // api call
  };
  const changePrompt = (newPrompt) => {
    setPrompt(newPrompt);
    window.scrollTo(0, 0);
  };

  const data = useMemo(
    () => ({
      prompt,
      setPrompt,
      generateImage,
      changePrompt,
    }),
    [prompt]
  );
  return (
    <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
  );
};
export const useHomePage = () => {
  const context = useContext(HomePageContext);
  return context;
};

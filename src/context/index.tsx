import React, { useState, useContext, createContext } from "react";
import sublinks from "../data";
import { AppContextType } from "../types";

const AppContext = createContext<AppContextType | null>(null!);

const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [sublink, setSublink] = useState({ page: "", menu: [] });
  const [submenuLocate, setSubmenuLocate] = useState({});

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openSubmenu = (
    text: string,
    coordinates: { centerBtn: number; bottomBtn: number }
  ) => {
    const matchPage = sublinks.find((data) => data.page === text);
    setSublink(matchPage as typeof sublink);
    setSubmenuLocate(coordinates);
    setIsSubmenuOpen(true);
  };

  const displaySubmenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pageText = e.currentTarget.textContent as string;
    const temBtn = e.currentTarget.getBoundingClientRect();
    const centerBtn = (temBtn.left + temBtn.right) / 2;
    const bottomBtn = temBtn.bottom - 3;
    openSubmenu(pageText, { centerBtn, bottomBtn });
  };

  const closeSubmenu = () => setIsSubmenuOpen(false);

  const handleSubmenu = (e: React.SyntheticEvent<HTMLElement>) => {
    if (!(e.target as Element).classList.contains("menuBtn")) {
      closeSubmenu();
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        sublink,
        openSidebar,
        closeSidebar,
        submenuLocate,
        closeSubmenu,
        displaySubmenu,
        handleSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext) as AppContextType;

export { AppContextProvider, useGlobalContext };

import React from "react";

export type Sublinks = {
  page: string;
  menu: { label: string; icon: React.ReactNode; url: string }[];
};

export type AppContextType = {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  sublink: Sublinks | { page: string; menu: [] };
  openSidebar: () => void;
  closeSidebar: () => void;
  submenuLocate: { centerBtn?: number; bottomBtn?: number };
  closeSubmenu: () => void;
  displaySubmenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmenu: (e: React.SyntheticEvent<HTMLElement>) => void;
};

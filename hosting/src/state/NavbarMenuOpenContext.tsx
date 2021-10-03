import React, { useContext, useState } from 'react';

export interface NavbarMenuOpenContextState {
  isNavbarMenuOpen: boolean;
  setIsNavbarMenuOpen: (open: boolean) => void;
}

export const NavbarMenuOpenContext = React.createContext<NavbarMenuOpenContextState>({
  isNavbarMenuOpen: false,
  setIsNavbarMenuOpen: (o: boolean) => { }
});


export const NavbarMenuOpenProvider: React.FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarMenuOpenContext.Provider
      value={{
        isNavbarMenuOpen: menuOpen,
        setIsNavbarMenuOpen: setMenuOpen,
      }}
    >
      {children}
    </NavbarMenuOpenContext.Provider>
  );
};

export function useNavbarOpen(): [boolean, (o: boolean) => void] {
  const { isNavbarMenuOpen, setIsNavbarMenuOpen } = useContext(NavbarMenuOpenContext);
  return [isNavbarMenuOpen, setIsNavbarMenuOpen];
}
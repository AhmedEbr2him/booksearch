import React, { useContext } from 'react';
export const AppContext = React.createContext();
export const useGlobalContext = () => {
  return useContext(AppContext);
};

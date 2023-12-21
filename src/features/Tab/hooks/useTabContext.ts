import { createContext, useContext } from 'react';

export const TabContext = createContext<{
  select: number;
  getTabItemProps: (index: number) => {
    onClick: () => void;
    'aria-selected': boolean;
  };
} | null>(null);

const useTabContext = () => {
  return useContext(TabContext);
};

export default useTabContext;

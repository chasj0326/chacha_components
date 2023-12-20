import React, { createContext, useContext } from 'react';

export const InputContext = createContext<{
  id: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} | null>(null);

const useInputContext = () => {
  return useContext(InputContext);
};

export default useInputContext;

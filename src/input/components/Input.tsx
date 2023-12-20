import { HTMLAttributes } from 'react';
import useInputContext from '../hooks/useInputContext';

const Input = ({ ...props }: HTMLAttributes<HTMLInputElement>) => {
  const contextValue = useInputContext();
  if (!contextValue) {
    throw new Error('Input must be in InputBox');
  }
  return (
    <input
      {...contextValue}
      {...props}
    />
  );
};

export default Input;

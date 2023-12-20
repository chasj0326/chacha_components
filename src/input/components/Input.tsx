import React from 'react';
import useInputContext from '../hooks/useInputContext';

const Input = ({
  ...props
}: React.ComponentPropsWithoutRef<'input'>) => {
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

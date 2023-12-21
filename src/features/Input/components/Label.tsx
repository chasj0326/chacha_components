import { HTMLAttributes } from 'react';
import useInputContext from '../hooks/useInputContext';

const Label = ({
  children,
  ...props
}: HTMLAttributes<HTMLLabelElement>) => {
  const contextValue = useInputContext();
  if (!contextValue) {
    throw new Error('Input must be in InputBox');
  }
  const { id } = contextValue;

  return (
    <label
      htmlFor={id}
      {...props}>
      {children}
    </label>
  );
};

export default Label;

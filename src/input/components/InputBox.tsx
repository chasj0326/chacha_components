import { InputContext } from '../hooks/useInputContext';
import useInput from '../hooks/useInput';
import { HTMLInputTypeAttribute } from 'react';
import Input from './Input';
import Label from './Label';

interface InputBoxProps {
  id?: string;
  initial?: string | number | boolean;
  type?: HTMLInputTypeAttribute;
  children?: React.ReactNode;
  onInput?: (value: string | number | boolean) => void;
}

const InputBox = ({
  id = '',
  initial = '',
  type = 'text',
  onInput,
  children,
}: InputBoxProps) => {
  const { getInputProps } = useInput({
    initial,
    onInput,
    type,
  });
  return (
    <InputContext.Provider value={{ id, ...getInputProps() }}>
      {children}
    </InputContext.Provider>
  );
};

InputBox.Input = Input;
InputBox.Label = Label;

export default InputBox;

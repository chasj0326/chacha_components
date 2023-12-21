import React, { useState } from 'react';

interface InputOptions {
  initial?: string | number;
  onInput?: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
}

const useInput = (option?: string | number | InputOptions) => {
  const inputOption =
    typeof option === 'object'
      ? option
      : {
          initial: option,
        };
  const { initial = '', type = 'text', onInput } = inputOption;

  const [value, setValue] = useState(initial);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onInput && onInput(e.target.value);
  };

  const getInputProps = () => ({
    type,
    value,
    onChange,
  });

  return { value, getInputProps };
};

export default useInput;

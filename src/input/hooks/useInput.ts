import React, { useState } from 'react';

interface InputOptions {
  initial?: boolean | string | number;
  onInput?: (value: boolean | string | number) => void;
  type?: React.HTMLInputTypeAttribute;
}

const useInput = (
  option?: boolean | string | number | InputOptions
) => {
  const inputOption =
    typeof option === 'object'
      ? option
      : {
          initial: option,
        };
  const { initial = '', type = 'text', onInput } = inputOption;

  const [value, setValue] = useState(initial);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue =
      type === 'checkbox' ? e.target.checked : e.target.value;
    setValue(inputValue);
    onInput && onInput(inputValue);
  };

  const getInputProps = () => ({
    type,
    value: String(value),
    checked: Boolean(value),
    onChange,
  });

  return { value, getInputProps };
};

export default useInput;

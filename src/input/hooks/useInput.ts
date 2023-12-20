import React, { useState } from 'react';

interface InputOptions {
  initial?: boolean | string | number;
  onInput?: (value: boolean | string | number) => void;
  type?: React.HTMLInputTypeAttribute;
}

const useInput = (
  option?: boolean | string | number | InputOptions
) => {
  const isOptionObj = typeof option === 'object';
  const initial = isOptionObj ? option.initial : option;
  const onInput = isOptionObj ? option.onInput : undefined;
  const type = isOptionObj ? option.type ?? 'text' : 'text';

  const [value, setValue] = useState(
    initial ?? (type === 'checkbox' ? false : '')
  );

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

  return {
    value: String(value),
    checked: Boolean(value),
    onChange,
    getInputProps,
  };
};

export default useInput;

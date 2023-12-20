import React, { useState } from 'react';

const useInput = (initial = '') => {
  const [value, setValue] = useState(initial);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getInputProps = () => ({
    value,
    onChange,
  });

  return {
    value,
    onChange,
    getInputProps,
  };
};

export default useInput;

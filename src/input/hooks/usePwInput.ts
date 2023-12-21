import React, { useState } from 'react';

const usePwInput = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const getPwInputProps = () => ({
    value: password,
    onChange,
    type: show ? 'text' : 'password',
  });

  return {
    password,
    onChange,
    getPwInputProps,
    show,
    toggleShow,
  };
};

export default usePwInput;

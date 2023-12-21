import { useState } from 'react';

const useTabProps = () => {
  const [select, setSelect] = useState(0);

  const getTabItemProps = (index: number) => ({
    onClick: () => setSelect(index),
    'aria-selected': select === index,
  });

  return {
    getTabItemProps,
    select,
  };
};

export default useTabProps;

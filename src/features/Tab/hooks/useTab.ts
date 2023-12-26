import React, { useState, useCallback } from 'react';
import { TabOptions } from '../types/tabOptions';

const useTab = (option?: number | TabOptions) => {
  const tabOption =
    typeof option === 'object' ? option : { initial: option };
  const { initial = 0, onChange } = tabOption;
  const [select, setSelect] = useState(initial);

  const getTabItemProps = useCallback(
    (index: number) => ({
      onClick: () => {
        setSelect(index);
        onChange && onChange(index);
      },
      'aria-selected': select === index,
    }),
    [onChange, select]
  );

  const getTabScreen = useCallback(
    (screens: React.ReactNode[]) => {
      return screens[select];
    },
    [select]
  );

  return {
    select,
    getTabItemProps,
    getTabScreen,
  };
};

export default useTab;

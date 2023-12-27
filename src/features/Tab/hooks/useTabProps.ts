import { useCallback, useState } from 'react';
import { TabOptions } from '../types/tabOptions';

const useTabProps = (option?: number | TabOptions) => {
  const tabOption =
    typeof option === 'object'
      ? option
      : { initial: option };
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

  return {
    getTabItemProps,
    select,
  };
};

export default useTabProps;

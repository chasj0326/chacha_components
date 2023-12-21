import React from 'react';
import { TabOptions } from '../types/tabOptions';
import { useTabProps } from '..';
import { TabContext } from '../hooks/useTabContext';

type TabBoxProps = TabOptions & {
  children: React.ReactNode;
};

const TabBox = ({
  initial,
  onChange,
  children,
}: TabBoxProps) => {
  const { select, getTabItemProps } = useTabProps({
    initial,
    onChange,
  });

  return (
    <TabContext.Provider
      value={{
        select,
        getTabItemProps,
      }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabBox;

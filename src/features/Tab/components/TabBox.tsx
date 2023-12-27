import React from 'react';
import { TabOptions } from '../types/tabOptions';
import { useTab } from '..';
import { TabContext } from '../hooks/useTabContext';

type TabBoxProps = TabOptions & {
  children: React.ReactNode;
};

const TabBox = ({ initial, onChange, children }: TabBoxProps) => {
  const { select, getTabItemProps } = useTab({
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

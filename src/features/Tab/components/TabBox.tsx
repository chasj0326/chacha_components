import React from 'react';
import { TabOptions } from '../types/tabOptions';
<<<<<<< HEAD
import { useTab } from '..';
=======
import { useTabProps } from '..';
>>>>>>> main
import { TabContext } from '../hooks/useTabContext';

type TabBoxProps = TabOptions & {
  children: React.ReactNode;
};

<<<<<<< HEAD
const TabBox = ({ initial, onChange, children }: TabBoxProps) => {
  const { select, getTabItemProps } = useTab({
=======
const TabBox = ({
  initial,
  onChange,
  children,
}: TabBoxProps) => {
  const { select, getTabItemProps } = useTabProps({
>>>>>>> main
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

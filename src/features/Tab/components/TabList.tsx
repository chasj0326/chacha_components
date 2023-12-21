import React from 'react';
import useTabContext from '../hooks/useTabContext';
import Tab, { TabProps } from './Tab';
import { childrenToArray } from '../utils/childrenToArray';

interface TabListProps {
  children: React.ReactNode;
}

const TabList = ({
  children,
  ...props
}: TabListProps &
  React.ComponentPropsWithoutRef<'div'>) => {
  const contextValue = useTabContext();
  if (!contextValue) {
    throw new Error('Tab.List must be in Tab.Box');
  }
  const { getTabItemProps } = contextValue;
  const tabs = childrenToArray<TabProps>(children, Tab);

  return (
    <div {...props}>
      {tabs.map(({ props: { children, ...props } }, i) => (
        <div
          key={i}
          {...getTabItemProps(i)}
          {...props}>
          {children}
        </div>
      ))}
    </div>
  );
};

export default TabList;

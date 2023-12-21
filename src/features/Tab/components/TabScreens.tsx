import React from 'react';
import useTabContext from '../hooks/useTabContext';
import TabScreen, { TabScreenProps } from './TabScreen';
import { childrenToArray } from '../utils/childrenToArray';

interface TabScreensProps {
  children: React.ReactNode;
}

const TabScreens = ({
  children,
  ...props
}: TabScreensProps &
  React.ComponentPropsWithoutRef<'div'>) => {
  const contextValue = useTabContext();
  if (!contextValue) {
    throw new Error('Tab.Screens must be in Tab.Box');
  }
  const { select } = contextValue;
  const screens = childrenToArray<TabScreenProps>(
    children,
    TabScreen
  );

  return (
    <div {...props}>{screens[select].props.children}</div>
  );
};

export default TabScreens;

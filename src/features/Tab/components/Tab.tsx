import React from 'react';
import TabBox from './TabBox';
import TabList from './TabList';
import TabScreens from './TabScreens';
import TabScreen from './TabScreen';

export type TabProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

const Tab = ({ children }: TabProps) => children;

export default Tab;

Tab.Box = TabBox;
Tab.List = TabList;
Tab.Screens = TabScreens;
Tab.Screen = TabScreen;

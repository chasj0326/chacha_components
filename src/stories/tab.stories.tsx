import type { Meta, StoryFn } from '@storybook/react';
import { useTab, Tab } from '../features/Tab';
import { useState } from 'react';

const meta: Meta = {
  title: 'Chacha/Tab',
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryFn = () => {
  const { getTabItemProps, getTabScreen, select } = useTab();
  return (
    <>
      <b>Selected Tab Index: {select}</b>
      <div className='flex gap-5'>
        <div {...getTabItemProps(0)}>Tab0</div>
        <div {...getTabItemProps(1)}>Tab1</div>
        <div {...getTabItemProps(2)}>Tab2</div>
        <div {...getTabItemProps(3)}>Tab3</div>
        <div {...getTabItemProps(4)}>Tab4</div>
      </div>
      <hr />
      {getTabScreen([
        <div>Tab Screen 0</div>,
        <div>Tab Screen 1</div>,
        <div>Tab Screen 2</div>,
        <div>Tab Screen 3</div>,
        <div>Tab Screen 4</div>,
      ])}
    </>
  );
};
Default.parameters = {
  docs: {
    description: {
      story: '**`useTab`** 훅을 호출하여 탭 기능을 UI 와 결합하기',
    },
  },
};

const tabItemStyle =
  'w-12 flex justify-center aria-selected:bg-gray-200 cursor-pointer';

export const Option: StoryFn = () => {
  const [count, setCount] = useState(0);
  const { getTabItemProps, getTabScreen } = useTab({
    initial: 1,
    onChange: () => {
      setCount((prev) => prev + 1);
    },
  });

  return (
    <>
      <b>Tab changed {count} time</b>
      <div className='flex gap-5'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            className={tabItemStyle}
            {...getTabItemProps(i)}>
            Tab{i}
          </div>
        ))}
      </div>
      <hr />
      {getTabScreen([
        <div>Tab Screen 0</div>,
        <div>Tab Screen 1</div>,
        <div>Tab Screen 2</div>,
        <div>Tab Screen 3</div>,
        <div>Tab Screen 4</div>,
      ])}
    </>
  );
};
Option.parameters = {
  docs: {
    description: {
      story: '**`useTab`** 옵션에 `onChange`, `initial` 추가하기',
    },
  },
};

export const Component: StoryFn = () => {
  return (
    <Tab.Box
      onChange={(index) => console.log(index)}
      initial={2}>
      <Tab.Screens>
        <Tab.Screen>thumbnail1</Tab.Screen>
        <Tab.Screen>thumbnail2</Tab.Screen>
        <Tab.Screen>thumbnail3</Tab.Screen>
      </Tab.Screens>
      <hr />
      <Tab.List className='flex gap-5'>
        <Tab className={tabItemStyle}>tab1</Tab>
        <Tab className={tabItemStyle}>tab2</Tab>
        <Tab className={tabItemStyle}>tab3</Tab>
      </Tab.List>
      <hr />
      <Tab.Screens>
        <Tab.Screen>screen1</Tab.Screen>
        <Tab.Screen>screen2</Tab.Screen>
        <Tab.Screen>screen3</Tab.Screen>
      </Tab.Screens>
    </Tab.Box>
  );
};
Component.parameters = {
  docs: {
    description: {
      story: '**`Tab.Box`** 컴포넌트 사용하여 tab 구성하기',
    },
  },
};

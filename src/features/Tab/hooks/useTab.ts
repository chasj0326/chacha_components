import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { TabOptions } from '../types/tabOptions';

const useTab = (option?: number | TabOptions) => {
  const tabOption =
    typeof option === 'object' ? option : { initial: option };
  const { initial = 0, onChange } = tabOption;

  const tabListRef = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState(initial);

  const controlTabList = (
    callback: (tabList: HTMLDivElement) => void
  ) => {
    const tabList = tabListRef.current;
    if (tabList) {
      callback(tabList);
    }
  };

  useEffect(() => {
    const handleClick = (index: number) => {
      setSelect(index);
      onChange && onChange(index);
    };

    controlTabList((tabList) => {
      const tabListItems = tabList.children;

      for (let i = 0; i < tabListItems.length; i++) {
        tabListItems[i].addEventListener('click', () =>
          handleClick(i)
        );
      }

      return () => {
        for (let i = 0; i < tabListItems.length; i++) {
          tabListItems[i].removeEventListener('click', () =>
            handleClick(i)
          );
        }
      };
    });
  }, [onChange]);

  useEffect(() => {
    controlTabList((tabList) => {
      const tabListItems = tabList.children;

      for (let i = 0; i < tabListItems.length; i++) {
        tabListItems[i].ariaSelected = `${i === select}`;
      }
    });
  }, [select]);

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
    tabListRef,
    select,
    getTabItemProps,
    getTabScreen,
  };
};

export default useTab;

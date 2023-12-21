import { useEffect, useRef, useState } from 'react';

const useTabRef = () => {
  const tabListRef = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState(0);

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
    };

    controlTabList(tabList => {
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
  }, []);

  useEffect(() => {
    controlTabList(tabList => {
      const tabListItems = tabList.children;

      for (let i = 0; i < tabListItems.length; i++) {
        tabListItems[i].ariaSelected = `${i === select}`;
      }
    });
  }, [select]);

  return {
    tabListRef,
    select,
  };
};

export default useTabRef;

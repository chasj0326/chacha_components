import { useTab } from './features/Tab';
import { Tab } from './features/Tab';

const App = () => {
  const { getTabItemProps, getTabScreen } = useTab();
  const { tabListRef, select } = useTab(2);
  return (
    <>
      <div>
        <h2>Tab1</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div {...getTabItemProps(0)}>Tab0</div>
          <div {...getTabItemProps(1)}>Tab1</div>
          <div {...getTabItemProps(2)}>Tab2</div>
          <div {...getTabItemProps(3)}>Tab3</div>
          <div {...getTabItemProps(4)}>Tab4</div>
        </div>
        <hr />
        <div>
          {getTabScreen([
            <div>Tab Screen 0</div>,
            <div>Tab Screen 1</div>,
            <div>Tab Screen 2</div>,
            <div>Tab Screen 3</div>,
            <div>Tab Screen 4</div>,
          ])}
        </div>
      </div>
      <div>
        <h2>Tab2</h2>
        <div
          ref={tabListRef}
          style={{ display: 'flex', gap: '10px' }}>
          <div>Tab0</div>
          <div>Tab1</div>
          <div>Tab2</div>
          <div>Tab3</div>
          <div>Tab4</div>
        </div>
        <hr />
        <div>
          {
            [
              <div>Tab Screen 0</div>,
              <div>Tab Screen 1</div>,
              <div>Tab Screen 2</div>,
              <div>Tab Screen 3</div>,
              <div>Tab Screen 4</div>,
            ][select]
          }
        </div>
      </div>
      <Tab.Box
        onChange={(index) => console.log(index)}
        initial={2}>
        <h1>Tab Component</h1>
        <Tab.Screens>
          <Tab.Screen>thumbnail1</Tab.Screen>
          <Tab.Screen>thumbnail2</Tab.Screen>
          <Tab.Screen>thumbnail3</Tab.Screen>
        </Tab.Screens>
        <hr />
        <Tab.List style={{ display: 'flex', gap: '10px' }}>
          <Tab>tab1</Tab>
          <Tab>tab2</Tab>
          <Tab>tab3</Tab>
        </Tab.List>
        <hr />
        <Tab.Screens>
          <Tab.Screen>screen1</Tab.Screen>
          <Tab.Screen>screen2</Tab.Screen>
          <Tab.Screen>screen3</Tab.Screen>
        </Tab.Screens>
      </Tab.Box>
    </>
  );
};

export default App;
